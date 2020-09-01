package com.intiformation.gestion.immo.webservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.intiformation.gestion.immo.dao.ProprietaireRepository;
import com.intiformation.gestion.immo.modele.Proprietaire;

/**
 * implémentation d'un ws REST pour le propriétaire avec Spring Web Services
 * accessible via l'url : http://localhost:8080/gestion-immo/proprietaires
 * @author marle
 *
 */
@CrossOrigin(value="http://localhost:8080")
@RestController
@RequestMapping(value="proprietaires")
public class ProprietaireWSRestSpringWS {
	
	//déclaration du repository et injection avec spring
	@Autowired
	private ProprietaireRepository proprietaireRepository;

	/**
	 * setter couche repository pour injection spring
	 * @param proprietaireRepository
	 */
	public void setProprietaireRepository(ProprietaireRepository proprietaireRepository) {
		this.proprietaireRepository = proprietaireRepository;
	}
	
	/*===============================================================================*/
	/*============== Méthodes à exposer dans le web service REST ====================*/
	/*===============================================================================*/
	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des propriétaires 
	 * renvoit les données en JSON 
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/proprietaires/getall
	 * 
	 */
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<Proprietaire> listAllProprietaires() {
		
		return proprietaireRepository.findAll();
	
	}//end listAllProprietaires
	
	/**
	 * méthode exposée dans le ws rest pour récupérer un propriétaire via son id
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/proprietaires/get-by-id/1
	 * 
	 */
	@RequestMapping(value="/get-by-id/{id}", method=RequestMethod.GET)
	public Proprietaire getProprietaireById(@PathVariable("id") Long pIdProprietaire) {
		
		Proprietaire proprietaire = null;
		Optional<Proprietaire> proprioOpt =  proprietaireRepository.findById(pIdProprietaire);
		
		if(proprioOpt.isPresent()) {
			proprietaire = proprioOpt.get();
		}//end if
		
		return proprietaire;
	
	}//end getProprietaireById
	
	/**
	 * méthode exposée dans le ws rest pour ajouter un propriétaire 
	 * reçoit les données en JSON et les transforme en JAVA via JAckson (via @RequestBody)
	 * invoquée avec une requête HTTP POST via url : http://localhost:8080/gestion-immo/proprietaires/save
	 * 
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public ResponseEntity<Proprietaire> addProprietaire(@RequestBody Proprietaire pProprietaire) {
		
		Proprietaire proprietaireAdded = proprietaireRepository.save(pProprietaire);
		return new ResponseEntity<>(proprietaireAdded, HttpStatus.OK);

	}//end addProprietaire
	
	/**
	 * méthode exposée dans le ws rest pour modifier un propriétaire 
	 * invoquée avec une requête HTTP PUT via url : http://localhost:8080/gestion-immo/proprietaires/update/1
	 * 
	 */
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Proprietaire> updateProprietaire(@RequestBody Proprietaire pProprietaire, @PathVariable("id") Long pIdProprietaire) {
				
		//récup du propriétaire à modifier
		Proprietaire proprietaireToUpdate = proprietaireRepository.getOne(pIdProprietaire);
		
		//modifications
		proprietaireToUpdate.setNom(pProprietaire.getNom());
		proprietaireToUpdate.setTelTravail(pProprietaire.getTelTravail());
		proprietaireToUpdate.setTelPrive(pProprietaire.getTelPrive());
		proprietaireToUpdate.setAdresse(pProprietaire.getAdresse());
		
		//modification
		Proprietaire proprietaireUpdated = proprietaireRepository.save(proprietaireToUpdate);
		return new ResponseEntity<>(proprietaireUpdated, HttpStatus.OK);

	}//end updateProprietaire
	
	/**
	 * méthode exposée dans le ws rest pour supprimer un propriétaire via son id
	 * invoquée avec une requête HTTP DELETE via url : http://localhost:8080/gestion-immo/proprietaires/delete/1
	 * 
	 */
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteProprietaireById(@PathVariable("id") Long pIdProprietaire) {
				
		proprietaireRepository.deleteById(pIdProprietaire);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
	
	}//end deleteProprietaireById

}//end class
