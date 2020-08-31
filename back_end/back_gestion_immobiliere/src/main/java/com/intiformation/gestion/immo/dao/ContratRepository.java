package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.intiformation.gestion.immo.modele.Contrat;

/**
 * @author giovanni
 *
 */
@RepositoryRestResource
public interface ContratRepository extends JpaRepository<Contrat, Long>{
	
	/*________ Méthodes de requêtes __________*/
	
	

}//END INTERFACE
