package com.intiformation.gestion.immo.lanceur;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.dao.BienImmobilierRepository;

@SpringBootApplication
@EntityScan(basePackages = { "com.intiformation.gestion.immo.modele" })
@EnableJpaRepositories(basePackages = { "com.intiformation.gestion.immo.dao" })
@ComponentScan(basePackages = { "com.intiformation.gestion.immo.webservice" })
public class BackGestionImmobiliereApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackGestionImmobiliereApplication.class, args);
	}

	@Autowired
	private BienImmobilierRepository bienRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		/*----------- Test DAO : GetAll------------------------------*/
		// déclaration de la couche DAO (pour la tester)
		

//		List<BienImmobilier> listeBiens = bienRepository.findAll();
//
//		System.out.println("-----------------Get all-------------------------");
//		for (BienImmobilier b : listeBiens) {
//			System.out.println("\t >" + b);
//		}//end for

	}//end run

}//end class
