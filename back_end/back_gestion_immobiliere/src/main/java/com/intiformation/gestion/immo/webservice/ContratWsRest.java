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

import com.intiformation.gestion.immo.dao.ContratRepository;
import com.intiformation.gestion.immo.modele.Contrat;

/**
 * implémentation d'un web service REST pour les visites Url d'accès :
 * http://localhost:8080/gestion-immo/contrat/
 * 
 * @author giovanni
 *
 */
@RestController
@RequestMapping(value = "contrats")
public class ContratWsRest {

	@Autowired
	private ContratRepository contratRepository ;

	/**
	 * Setter contratRepository pour l'injection par modificateur 
	 * @param contratRepository
	 */
	public void setContratRepository(ContratRepository contratRepository) {
		this.contratRepository = contratRepository;
	}

	/**
	 * méthode exposée dans le ws rest pour recuperer la liste des contrats
	 * effectuées renvoie la liste des contrats en JSON invoquée avec une requete
	 * HTTP en GET
	 * @return
	 */
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	public List<Contrat> listAllContrat() {

		return contratRepository.findAll();

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour ajouter un contrat dans la BDD invoquée
	 * avec une requete HTTP en POST
	 * @param pContrat
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addcontrat(@RequestBody Contrat pContrat) {

		contratRepository.save(pContrat);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour modifier un contrat renvoie la liste des
	 * contrats en JSON invoquée avec une requete HTTP en PUT
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateContrat(@RequestBody Contrat pContrat, @PathVariable("id") Long pIdContrat) {

		Contrat contratToUpdate = contratRepository.getOne(pIdContrat);

		contratToUpdate.setDateAcquisition(pContrat.getDateAcquisition());
		contratToUpdate.setPrixAcquisition(pContrat.getPrixAcquisition());
		contratToUpdate.setConseillers(pContrat.getConseillers());
		
		contratRepository.save(contratToUpdate);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour recup un contrat via son ID en
	 * JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/get-by-id/{id}", method = RequestMethod.GET)
	public Contrat listeContratById(@PathVariable("id") Long pIdContrat) {

		Optional<Contrat> contratOpt = contratRepository.findById(pIdContrat);

		Contrat contrat = null;

		if (contratOpt.isPresent()) {

			contrat = contratOpt.get();
		}

		return contrat;

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour supprimer un contrat, renvoie la liste
	 * des contrats en JSON invoquée avec une requete HTTP en GET
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteContrat(@PathVariable("id") Long pIdContrat) {

		// suppression de l'employé
		contratRepository.deleteById(pIdContrat);

		/**
		 * > Boolean.TRUE = suppression ok > HttpStatus.OK = renvoie d'un 200 OK
		 */
		// config de la réponse à renvoyer
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END MEHTODE

}
