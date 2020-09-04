package com.intiformation.gestion.immo.dao;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.Adresse;
import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.modele.ConseillerImmobilier;
import com.intiformation.gestion.immo.modele.Visite;

/**
 * Couche d'accès à la DAO pour les visites
 * @author giovanni
 *
 */
@Repository
public interface VisiteRepository extends JpaRepository<Visite, Long> {
	
	/*_______ Méthode de requêtes __________*/
	/**
	 * méthode qui permet de récupérer les visites d'un conseiller (via son id)
	 * @param pIdConseiller = l'id du conseiller
	 * @return
	 */
	@Query("SELECT v FROM Visite v WHERE v.conseillers.idConseiller = ?1")
	public List<Visite> findVisiteByIdConseiller(Long pIdConseiller);

}//END CLASS
