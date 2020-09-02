package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Proprietaire;

/**
 * couche d'accès aux données (DAO) pour les propriétaires
 * @author marle
 *
 */
@Repository
public interface ProprietaireRepository extends JpaRepository<Proprietaire, Long> {

	/*____________ méthodes de requêtes ______________*/
	

	
}//end interface
