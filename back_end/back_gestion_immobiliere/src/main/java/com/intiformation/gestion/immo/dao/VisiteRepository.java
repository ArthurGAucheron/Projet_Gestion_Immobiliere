package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.intiformation.gestion.immo.modele.Visite;

/**
 * Couche d'accès à la DAO pour les visites
 * @author giovanni
 *
 */
@RepositoryRestResource
public interface VisiteRepository extends JpaRepository<Visite, Long> {
	
	/*_______ Méthode de requêtes __________*/

}//END CLASS
