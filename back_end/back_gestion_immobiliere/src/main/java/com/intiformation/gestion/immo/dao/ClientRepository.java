package com.intiformation.gestion.immo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.ClasseStandard;
import com.intiformation.gestion.immo.modele.Client;
import com.intiformation.gestion.immo.modele.Visite;


/**
 * couche d'accès aux données (DAO) pour les clients
 * @author marle
 *
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

	/*____________ méthodes de requêtes ______________*/
	/**
	 * permet de récupérer la liste des clients interessés par une classe standard 
	 * @param pIdClasse : l'id de la classe standard
	 * @return
	 */
	//@Query("SELECT c FROM Client c WHERE c.classesStandard.idClasse = ?1")
	//public List<Client> findClientsByClasse(Long pIdClasse);
	
	//public List<Client> findByClassesStandard(ClasseStandard pClasse);

}//end interface
