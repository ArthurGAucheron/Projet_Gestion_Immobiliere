package com.intiformation.gestion.immo.lanceur;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import org.springframework.context.annotation.ComponentScan;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@EntityScan(basePackages= {"com.intiformation.gestion.immo.modele"})
@EnableJpaRepositories(basePackages= {"com.intiformation.gestion.immo.dao"})
@ComponentScan(basePackages= {"com.intiformation.gestion.immo.webservice"})
public class BackGestionImmobiliereApplication implements CommandLineRunner{
	
	
	public static void main(String[] args) {
		SpringApplication.run(BackGestionImmobiliereApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}

}//END METHODE

