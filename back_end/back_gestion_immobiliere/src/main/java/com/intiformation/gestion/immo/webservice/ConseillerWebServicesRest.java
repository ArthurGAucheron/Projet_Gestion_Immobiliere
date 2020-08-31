package com.intiformation.gestion.immo.webservice;

import java.util.List;

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
 * 
 * @author giovanni
 *
 */
@RestController
@RequestMapping("")
public class ConseillerWebServicesRest {
	
	// Déclaration Couche DAO + injection via modificateur
	@Autowired
	private ConseillerImmobilierRepository conseillerRepository;

	/**
	 * Setter couche DAO pour injection par modificateur
	 * @param conseillerRepository
	 */
	public void setConseillerRepository(ConseillerImmobilierRepository conseillerRepository) {
		this.conseillerRepository = conseillerRepository;
	}

	/**
	 * Méthode permettant d'ajouter un Conseiller Immo dans la BDD
	 * @param pConseiller
	 */
	@RequestMapping(value = "/conseillers/save", method = RequestMethod.POST)
	public void addConseiller(@RequestBody ConseillerImmobilier pConseiller) {

		conseillerRepository.save(pConseiller);
		
	}//END METHODE
	
	/**
	 * Méthode permettant de retourner la liste des conseillers présent dans la BDD
	 * @return
	 */
	@RequestMapping(value = "/conseillers/getall", method = RequestMethod.GET)
	public List<ConseillerImmobilier> listAllEmploye() {
		
		return conseillerRepository.findAll();
		
	}// END METHODE
	
	/**
	 * méthode exposée dans le ws rest pour modifier un employé renvoie la liste des
	 * employés en JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/employes/update/{id}", method = RequestMethod.PUT)
	public void updateEmploye(@RequestBody ConseillerImmobilier pConseiller, @PathVariable("id") Long pIdConseiller) {

		ConseillerImmobilier conseillerToUpdate = conseillerRepository.getOne(pIdConseiller);
		
		conseillerRepository.save(conseillerToUpdate);

	}// END METHODE
	
	
	/**
	 * méthode exposée dans le ws rest pour supprimer un employé renvoie la liste
	 * des employés en JSON invoquée avec une requete http en get
	 */
	@RequestMapping(value = "/employes/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteEmploye(@PathVariable("id") Long pIdConseiller) {

		// suppression de l'employé
		conseillerRepository.deleteById(pIdConseiller);
		/**
		 * > Boolean.TRUE = suppression ok > HttpStatus.OK = renvoie d'un 200 OK
		 */
		// config de la réponse à renvoyer
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// END MEHTODE

	
	
	

}
