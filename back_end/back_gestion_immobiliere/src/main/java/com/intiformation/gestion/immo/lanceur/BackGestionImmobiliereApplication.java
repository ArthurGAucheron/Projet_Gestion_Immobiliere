package com.intiformation.gestion.immo.lanceur;

import java.io.IOException;
import java.util.Properties;
import javax.sql.DataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

/**
 * @author giovanni
 *
 */
@SpringBootApplication // désactivation de la config par défaut de spring boot pour la co à la bdd
@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class,
		DataSourceTransactionManagerAutoConfiguration.class, HibernateJpaAutoConfiguration.class, })
@ComponentScan(basePackages = { "com.intiformation.gestion.immo.dao", "com.intiformation.gestion.immo.webservice" })
public class BackGestionImmobiliereApplication {

	// variable représentant l'environnement dans lequel notre app est exécuté
	@Autowired
	private Environment appEnvironment;

	public static void main(String[] args) {
		SpringApplication.run(BackGestionImmobiliereApplication.class, args);
	}

	/**
	 * permet de créer un bean spring
	 * 
	 * @return
	 */
	@Bean(name = "dataSourceBean")
	public DataSource getDataSourceBean() {

		// objet de la data source
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

		// déf des props de la dataSource
		dataSource.setDriverClassName(appEnvironment.getProperty("spring.datasource.driver-class-name"));
		dataSource.setUrl(appEnvironment.getProperty("spring.datasource.url"));
		dataSource.setUsername(appEnvironment.getProperty("spring.datasource.username"));
		dataSource.setPassword(appEnvironment.getProperty("spring.datasource.password"));

		System.out.println("DataSource = " + dataSource);

		// renvoi de la datasource
		return dataSource;

	}// END METHODE

	/**
	 * permet de créer un bean spring injection du bean de la datasource
	 * 
	 * @param pDataSource
	 *            à injecter dans la sessionFactory
	 * @return
	 * @throws IOException
	 */
	@Autowired
	@Bean(name = "sessionFactoryBean")
	public SessionFactory getSessionFactoryBean(DataSource pDataSource) throws IOException {

		// var pour stocker les props d'hibernate définis dans application.properties
		Properties properties = new Properties();

		// récup des props hibernate de application.properties et sav dans properties
		properties.put("hibernate.dialect", appEnvironment.getProperty("spring.jpa.properties.hibernate.dialect"));
		properties.put("hibernate.hbm2ddl.auto", appEnvironment.getProperty("spring.jpa.hibernate.ddl-auto"));
		properties.put("hibernate.show_sql", appEnvironment.getProperty("spring.jpa.show-sql"));

		// -> 2 création de l'objet de la sessionFactory via l'implémentation de spring
		LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();

		// -> 3 config de la session factory
		factoryBean.setPackagesToScan(new String[] { "com.intiformation.gestion.immo.modele" });

		factoryBean.setDataSource(pDataSource);

		// def des prop d'hibernate
		factoryBean.setHibernateProperties(properties);

		// afterPropertiesSet() : validation de la config globale lorsque
		factoryBean.afterPropertiesSet();

		// 4. recup de l'objet de la sessionFactory
		SessionFactory sessionfactory = factoryBean.getObject();

		System.out.println("### SessionFactory = " + sessionfactory);

		// 5. renvoie sessionFactory
		return sessionfactory;

	}// END METHODE

	/**
	 * permet de créer un bean spring du gestionnaires des txs injection du bean de
	 * la sessionFactory
	 * 
	 * @return
	 */
	@Autowired
	@Bean(name = "transactionManagerBean")
	public HibernateTransactionManager getTransactionManager(SessionFactory pSessionFactory) {

		// 1. création de l'objet du gestionnaire des txs
		HibernateTransactionManager txManager = new HibernateTransactionManager(pSessionFactory);

		System.out.println("## transaction manager = " + txManager);

		// 2. renvoie transaction manager
		return txManager;

	}// END METHODE

}// end class
