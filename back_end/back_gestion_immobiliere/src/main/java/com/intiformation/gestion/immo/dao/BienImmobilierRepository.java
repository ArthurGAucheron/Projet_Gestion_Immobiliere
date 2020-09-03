package com.intiformation.gestion.immo.dao;



import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.modele.ClasseStandard;
import com.intiformation.gestion.immo.modele.ConseillerImmobilier;
import com.intiformation.gestion.immo.modele.Contrat;
import com.intiformation.gestion.immo.modele.Adresse;

@RepositoryRestResource
public interface BienImmobilierRepository extends JpaRepository<BienImmobilier, Long>{


	
	
	/*----------------- Méthodes de requêtes -------------------*/
	
	
	public List<BienImmobilier> findByClasse(ClasseStandard pClasse);

	public Set<BienImmobilier> findByAdresse(Adresse pAdresse);
	
	@Query("select b from BienImmobilier b where b.contrat.conseillers.idConseiller = ?1")
	public Set<BienImmobilier> getBienByConseillerId(Long pIdConseiller);
	

	@Query("SELECT b FROM BienImmobilier b WHERE b.statut LIKE '%à%' AND b.classe.idClasse = ?1")
	public List<BienImmobilier> findBiensByIdClasse(Long pIdClasse);

	

}//end interface
