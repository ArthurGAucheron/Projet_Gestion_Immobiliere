package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Visite;

/**
 * Couche d'accès à la DAO pour les visites
 * @author giovanni
 *
 */
@Repository
public interface VisiteRepository extends JpaRepository<Visite, Long> {
	
	/*_______ Méthode de requêtes __________*/

}//END CLASS
