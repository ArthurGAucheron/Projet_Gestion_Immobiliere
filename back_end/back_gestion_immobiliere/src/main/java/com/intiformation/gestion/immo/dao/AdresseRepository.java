package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Adresse;

/**
 * couche d'accès aux données (DAO) pour les adresses
 * @author marle
 *
 */
@Repository
public interface AdresseRepository extends JpaRepository<Adresse, Long>{

	/*____________ méthodes de requêtes ______________*/

}//end interface
