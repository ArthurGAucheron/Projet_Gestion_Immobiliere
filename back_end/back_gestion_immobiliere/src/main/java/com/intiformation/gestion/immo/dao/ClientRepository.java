package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Client;


/**
 * couche d'accès aux données (DAO) pour les clients
 * @author marle
 *
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

	/*____________ méthodes de requêtes ______________*/
	
}//end interface
