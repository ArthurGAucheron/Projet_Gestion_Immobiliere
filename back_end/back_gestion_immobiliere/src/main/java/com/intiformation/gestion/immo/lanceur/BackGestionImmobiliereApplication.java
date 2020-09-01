package com.intiformation.gestion.immo.lanceur;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@SpringBootApplication
<<<<<<< HEAD

//désactivation de la config par défaut de spring boot pour la co à la bdd
@EnableAutoConfiguration(exclude = {
	DataSourceAutoConfiguration.class,
	DataSourceTransactionManagerAutoConfiguration.class,
	HibernateJpaAutoConfiguration.class,		
})
@ComponentScan(basePackages = {"com.intiformation.gestion.immo.dao"})// détection auto des beans spring
public class BackGestionImmobiliereApplication {
=======
@EntityScan(basePackages= {"com.intiformation.gestion.immo.modele"})
@EnableJpaRepositories(basePackages= {"com.intiformation.gestion.immo.dao"})
@ComponentScan(basePackages= {"com.intiformation.gestion.immo.webservice"})
public class BackGestionImmobiliereApplication implements CommandLineRunner{
>>>>>>> 4cd84fa959b2895b5c240074b81b4955f8ed4584
	
	
	public static void main(String[] args) {
		SpringApplication.run(BackGestionImmobiliereApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}//END METHODE

}
