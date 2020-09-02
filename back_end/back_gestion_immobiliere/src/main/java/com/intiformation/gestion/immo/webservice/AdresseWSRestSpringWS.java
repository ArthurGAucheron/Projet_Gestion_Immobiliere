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

import com.intiformation.gestion.immo.dao.AdresseRepository;
import com.intiformation.gestion.immo.modele.Adresse;

/**
 * implémentation d'un ws REST pour les adresses avec Spring Web Services
 * accessible via l'url : http://localhost:8080/gestion-immo/adresses
 * @author marle
 *
 */
@CrossOrigin(value="http://localhost:4200")
@RestController
@RequestMapping(value="adresses")
public class AdresseWSRestSpringWS {
	
	//déclaration du repository et injection avec spring
	@Autowired
	private AdresseRepository adresseRepository;

	/**
	 * setter couche repository pour injection spring
	 * @param adresseRepository
	 */
	public void setAdresseRepository(AdresseRepository adresseRepository) {
		this.adresseRepository = adresseRepository;
	}
	
	/*===============================================================================*/
	/*============== Méthodes à exposer dans le web service REST ====================*/
	/*===============================================================================*/
	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des adresses 
	 * renvoit les données en JSON 
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/adresses/getall
	 * 
	 */
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<Adresse> listAllAdresses() {
		
		return adresseRepository.findAll();
	
	}//end listAllAdresses
	
	/**
	 * méthode exposée dans le ws rest pour récupérer une adresse via son id
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/adresses/get-by-id/1
	 * 
	 */
	@RequestMapping(value="/get-by-id/{id}", method=RequestMethod.GET)
	public Adresse getAdresseById(@PathVariable("id") Long pIdAdresse) {
		
		Adresse adresse = null;
		Optional<Adresse> adresseOpt = adresseRepository.findById(pIdAdresse);
		
		if(adresseOpt.isPresent()) {
			adresse = adresseOpt.get();
		}//end if
		
		return adresse;
	
	}//end getAdresseById
	
	/**
	 * méthode exposée dans le ws rest pour ajouter une adresse 
	 * reçoit les données en JSON et les transforme en JAVA via JAckson (via @RequestBody)
	 * invoquée avec une requête HTTP POST via url : http://localhost:8080/gestion-immo/adresses/save
	 * 
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public ResponseEntity<Adresse> addAdresse(@RequestBody Adresse pAdresse) {
		
		Adresse adresseAdded = adresseRepository.save(pAdresse);
		return new ResponseEntity<Adresse>(adresseAdded, HttpStatus.OK);
	
	}//end addAdresse
	
	/**
	 * méthode exposée dans le ws rest pour modifier une adresse 
	 * invoquée avec une requête HTTP PUT via url : http://localhost:8080/gestion-immo/adresses/update/1
	 * 
	 */
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Adresse> updateAdresse(@RequestBody Adresse pAdresse, @PathVariable("id") Long pIdAdresse) {
				
		//récup de l'adresse à modifier
		Adresse adresseToUpdate = adresseRepository.getOne(pIdAdresse);
		
		//modifications
		adresseToUpdate.setNumero(pAdresse.getNumero());
		adresseToUpdate.setRue(pAdresse.getRue());
		adresseToUpdate.setCodePostal(pAdresse.getCodePostal());
		adresseToUpdate.setLocalite(pAdresse.getLocalite());
		adresseToUpdate.setPays(pAdresse.getPays());
		//adresseToUpdate.setClients(pAdresse.getClients());
		//adresseToUpdate.setProprietaires(pAdresse.getProprietaires());
		
		//modification
		Adresse adresseUpdated = adresseRepository.save(adresseToUpdate);		
		return new ResponseEntity<Adresse>(adresseUpdated, HttpStatus.OK);
		
	}//end updateAdresse
	
	/**
	 * méthode exposée dans le ws rest pour supprimer une adresse via son id
	 * invoquée avec une requête HTTP DELETE via url : http://localhost:8080/gestion-immo/adresses/delete/1
	 * 
	 */
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteAdresseById(@PathVariable("id") Long pIdAdresse) {
				
		adresseRepository.deleteById(pIdAdresse);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
	
	}//end deleteAdresseById

}//end class
