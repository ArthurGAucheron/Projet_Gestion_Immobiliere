package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;


import com.intiformation.gestion.immo.modele.ConseillerImmobilier;

/**
 * Couche DAO pour les conseillers
 * @author giovanni
 *
 */
@RestResource(path="conseillers")
public interface ConseillerImmobilierRepository extends JpaRepository<ConseillerImmobilier, Long> {
	
	/*__________ Méthode des requêtes ___________*/
	public ConseillerImmobilier findByIdentifiant(String Login);

}//END INTERFACE
