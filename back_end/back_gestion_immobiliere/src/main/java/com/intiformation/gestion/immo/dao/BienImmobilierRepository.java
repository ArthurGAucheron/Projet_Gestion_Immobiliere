package com.intiformation.gestion.immo.dao;


import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.modele.ClasseStandard;
import com.intiformation.gestion.immo.modele.Adresse;

@RepositoryRestResource
public interface BienImmobilierRepository extends JpaRepository<BienImmobilier, Long>{


	
	
	/*----------------- Méthodes de requêtes -------------------*/
	
	
	public Set<BienImmobilier> findByClasse(ClasseStandard pClasse);
	
	
	public Set<BienImmobilier> findByAdresse(Adresse pAdresse);



	

}//end interface
