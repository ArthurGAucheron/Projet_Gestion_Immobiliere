package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Contrat;

/**
 * @author giovanni
 *
 */
@Repository
public interface ContratRepository extends JpaRepository<Contrat, Long>{
	
	/*________ Méthodes de requêtes __________*/
	
	

}//END INTERFACE
