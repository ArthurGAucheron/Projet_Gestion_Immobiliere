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

import com.intiformation.gestion.immo.dao.VisiteRepository;
import com.intiformation.gestion.immo.modele.Visite;

/**
 * implémentation d'un web service REST pour les visites 
 * Url d'accès : http://localhost:8080/gestion-immo/visite/
 * @author giovanni
 *
 */
@RestController
@RequestMapping("/visites")
public class VisiteWsRest {

	@Autowired
	private VisiteRepository visiteRepository;

	/**
	 * Setter visiteRepository pour l'injection par modificateur
	 * @param visiteRepository
	 */
	public void setVisiteRepository(VisiteRepository visiteRepository) {
		this.visiteRepository = visiteRepository;
	}

	/**
	 * méthode exposée dans le ws rest pour recuperer la liste des visites effectuées
	 * renvoie la liste des visites en JSON invoquée avec une requete HTTP en GET
	 * @return
	 */
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	public List<Visite> listAllVisite() {

		return visiteRepository.findAll();

	}// END METHODE


	/**
	 * méthode exposée dans le ws rest pour ajouter une visite dans la BDD
	 * invoquée avec une requete HTTP en POST
	 * 
	 * @param pEmploye
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addConseiller(@RequestBody Visite pVisite) {

		visiteRepository.save(pVisite);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour modifier une visite 
	 * renvoie la liste des employés en JSON invoquée avec une requete HTTP en PUT
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateVisite(@RequestBody Visite pVisite,
			@PathVariable("id") Long pIdVisite) {

		Visite visiteToUpdate = visiteRepository.getOne(pIdVisite);

		visiteToUpdate.setDateVisite(pVisite.getDateVisite());
		
		/*
		visiteToUpdate.setBienImmobilier(pVisite.getBienImmobilier());
		visiteToUpdate.setConseillers(pVisite.getConseillers());
		visiteToUpdate.setClient(pVisite.getClient());
		*/
		
		visiteRepository.save(visiteToUpdate);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour recup une visite via son ID employés en
	 * JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/get-by-id/{id}", method = RequestMethod.GET)
	public Visite listeVisiteById(@PathVariable("id") Long pIdVisite) {

		Optional<Visite> visiteOpt = visiteRepository.findById(pIdVisite);

		Visite visite = null;

		if (visiteOpt.isPresent()) {

			visite = visiteOpt.get();
		}

		return visite;

	}// END METHODE

	/**
	 * méthode exposée dans le ws rest pour supprimer une visite, renvoie la
	 * liste des conseillers en JSON invoquée avec une requete HTTP en GET
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteVisite(@PathVariable("id") Long pIdVisite) {

		// suppression de l'employé
		visiteRepository.deleteById(pIdVisite);

		/**
		 * > Boolean.TRUE = suppression ok > HttpStatus.OK = renvoie d'un 200 OK
		 */
		// config de la réponse à renvoyer
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END MEHTODE

}
