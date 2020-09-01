package com.intiformation.gestion.immo.webservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.intiformation.gestion.immo.dao.BienImmobilierRepository;
import com.intiformation.gestion.immo.modele.BienImmobilier;

/**
 * implémentation d'un ws REST pour un bien immobilier avec Spring Web Services
 * accessible via l'url : http://localhost:8080/back_gestion_immobiliere/biens
 * 
 * @author cam
 *
 */
@RestController
@RequestMapping(value = "biens")
public class BienImmobilierWSRestSpringWS {

	// déclaration du repository et injection avec spring
	@Autowired
	private BienImmobilierRepository bienRepository;

	/**
	 * setter couche repository pour injection spring
	 * 
	 * @param bienRepository
	 */
	public void setBienRepository(BienImmobilierRepository bienRepository) {
		this.bienRepository = bienRepository;
	}//end setter
	
	
	/*===============================================================================*/
	/*============== Méthodes à exposer dans le web service REST ====================*/
	/*===============================================================================*/
	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des bien immobiliers
	 * renvoit les données en JSON 
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/biens/getall
	 * 
	 */
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<BienImmobilier> listAllBiens() {
		
		return bienRepository.findAll();
	
	}//end listAllBiens
	
	/**
	 * méthode exposée dans le ws rest pour récupérer un propriétaire via son id
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/biens/get-by-id/1
	 * 
	 */
	@RequestMapping(value="/get-by-id/{id}", method=RequestMethod.GET)
	public BienImmobilier getBienById(@PathVariable("id") Long pIdBien) {
		
		BienImmobilier bien = null;
		Optional<BienImmobilier> bienOpt =  bienRepository.findById(pIdBien);
		
		if(bienOpt.isPresent()) {
			bien = bienOpt.get();
			System.out.println("bien");
		}//end if
		
		return bien;
	
	}//end getBienById
	
	
	/**
	 * méthode exposée dans le ws rest pour ajouter un bien 
	 * reçoit les données en JSON et les transforme en JAVA via JAckson (via @RequestBody)
	 * invoquée avec une requête HTTP POST via url : http://localhost:8080/gestion-immo/biens/save
	 * 
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public void addBien(@RequestBody BienImmobilier pBien) {
		
		bienRepository.save(pBien);
	
	}//end addBien
	
	/**
	 * méthode exposée dans le ws rest pour modifier un bien 
	 * invoquée avec une requête HTTP PUT via url : http://localhost:8080/gestion-immo/biens/update/1
	 * 
	 */
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public void updateBien(@RequestBody BienImmobilier pBien, @PathVariable("id") Long pIdBien) {
				
		//récup du bien à modifier
		BienImmobilier bienToUpdate = bienRepository.getOne(pIdBien);
		
		//modifications
		bienToUpdate.setLibelle(pBien.getLibelle());
		bienToUpdate.setClasse(pBien.getClasse());
		bienToUpdate.setAdresse(pBien.getAdresse());
		bienToUpdate.setDescriptif(pBien.getDescriptif());
		bienToUpdate.setDateMiseADispo(pBien.getDateMiseADispo());
		bienToUpdate.setDateSoumission(pBien.getDateSoumission());
		bienToUpdate.setRevenuCadastral(pBien.getRevenuCadastral());
		
		
		//modification
		bienRepository.save(bienToUpdate);
	
	}//end updateProprietaire
	
	/**
	 * méthode exposée dans le ws rest pour supprimer un propriétaire via son id
	 * invoquée avec une requête HTTP DELETE via url : http://localhost:8080/gestion-immo/biens/delete/1
	 * 
	 */
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public void deleteBienById(@PathVariable("id") Long pIdBien) {
				
		bienRepository.deleteById(pIdBien);
	
	}//end deleteProprietaireById

	

}// end class
