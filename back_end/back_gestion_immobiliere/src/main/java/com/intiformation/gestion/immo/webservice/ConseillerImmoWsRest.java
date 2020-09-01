package com.intiformation.gestion.immo.webservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.intiformation.gestion.immo.dao.ConseillerImmobilierRepository;
import com.intiformation.gestion.immo.modele.ConseillerImmobilier;

/**
 * implémentation d'un web service REST pour le conseiller 
 * Url d'accès : http://localhost:8080/gestion-immo/conseillers/
 * @author giovanni
 *
 */
@RestController
@RequestMapping("/conseillers")
public class ConseillerImmoWsRest {
	
	@Autowired
	private ConseillerImmobilierRepository conseillerRepository;

	/**
	 * Setter conseillerRepository pour l'injection par modificateur
	 * @param conseillerRepository
	 */
	public void setConseillerRepository(ConseillerImmobilierRepository conseillerRepository) {
		this.conseillerRepository = conseillerRepository;
	}
	
	/**
	 * méthode exposée dans le ws rest pour recuperer la liste des conseillerImmo 
	 * renvoie la liste des conseillers en JSON invoquée avec une requete HTTP en GET
	 * 
	 * @return
	 */
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	public List<ConseillerImmobilier> listAllConseiller() {
		
		return conseillerRepository.findAll();
	
	}// END METHODE
	
	/**
	 * méthode exposée dans le ws rest pour ajouter un conseillerImmo dans la BDD
	 * invoquée avec une requete HTTP en POST
	 * @param pEmploye
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addConseiller(@RequestBody ConseillerImmobilier pConseiller) {

		conseillerRepository.save(pConseiller);
		
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
		
	}//END METHODE
	
	
	/**
	 * méthode exposée dans le ws rest pour modifier un conseiller renvoie la liste des
	 * conseiller en JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateConseiller(@RequestBody ConseillerImmobilier pConseiller, @PathVariable("id") Long pIdConseiller) {

		ConseillerImmobilier conseillerToUpdate = conseillerRepository.getOne(pIdConseiller);
		
		conseillerToUpdate.setNom(pConseiller.getNom());
		conseillerToUpdate.setIdentifiant(pConseiller.getIdentifiant());
		conseillerToUpdate.setMotDePasse(pConseiller.getMotDePasse());
		conseillerToUpdate.setTelephone(pConseiller.getTelephone());
		/*
		conseillerToUpdate.setVisite(pConseiller.getVisite());
		*/
		
		conseillerRepository.save(conseillerToUpdate);
		
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour recup un conseiller via son ID 
	 * conseiller en JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/get-by-id/{id}", method = RequestMethod.GET)
	public ConseillerImmobilier listeConseillerById(@PathVariable("id") Long pIdConseiller) {

		Optional<ConseillerImmobilier> conseillerOpt = conseillerRepository.findById(pIdConseiller);
		
		ConseillerImmobilier conseiller = null;
		
		if (conseillerOpt.isPresent()) {
			
			conseiller = conseillerOpt.get();
		}
		
			return conseiller;

	}// END METHODE


	/**
	 * méthode exposée dans le ws rest pour supprimer un conseiller,
	 * renvoie la liste des conseillers en JSON invoquée avec une requete HTTP en GET
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteConseiller(@PathVariable("id") Long pIdConseiller) {

		// suppression de l'employé
		conseillerRepository.deleteById(pIdConseiller);
		
		/**
		 * > Boolean.TRUE = suppression ok > HttpStatus.OK = renvoie d'un 200 OK
		 */
		// config de la réponse à renvoyer
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END MEHTODE

	
	

}
