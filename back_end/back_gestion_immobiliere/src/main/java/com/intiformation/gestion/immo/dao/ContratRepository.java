package com.intiformation.gestion.immo.dao;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.modele.ClasseStandard;
import com.intiformation.gestion.immo.modele.ConseillerImmobilier;
import com.intiformation.gestion.immo.modele.Contrat;

/**
 * @author giovanni
 *
 */
@RestResource(path="contrats")
public interface ContratRepository extends JpaRepository<Contrat, Long>{
	
	/*________ Méthodes de requêtes __________*/
	

	
	

}//END INTERFACE
