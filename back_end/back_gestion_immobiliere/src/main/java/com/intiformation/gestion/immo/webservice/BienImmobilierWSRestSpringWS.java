package com.intiformation.gestion.immo.webservice;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.intiformation.gestion.immo.dao.BienImmobilierRepository;
import com.intiformation.gestion.immo.modele.Adresse;
import com.intiformation.gestion.immo.modele.BienImmobilier;

/**
 * implémentation d'un ws REST pour un bien immobilier avec Spring Web Services
 * accessible via l'url : http://localhost:8080/gestion-immo/biens
 * 
 * @author cam
 *
 */
@RestController
@RequestMapping(value="biens")
public class BienImmobilierWSRestSpringWS {

	// déclaration du repository et injection avec spring
	@Autowired
	private BienImmobilierRepository bienRepository;

	/**
	 * setter couche repository pour injection spring
	 * 
	 * @param bienRepository
	 */
	public void setBienImmobilier(BienImmobilierRepository bienRepository) {
		this.bienRepository = bienRepository;
	}

	/*
	 * =============================================================================
	 * ==
	 */
	/*
	 * ============== Méthodes à exposer dans le web service REST
	 * ====================
	 */
	/*
	 * =============================================================================
	 * ==
	 */
	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des biens renvoit les
	 * données en JSON invoquée avec une requête HTTP GET via url :
	 * http://localhost:8080/gestion-immo/biens/getall
	 * 
	 */
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	public List<BienImmobilier> listAllBiens() {

		return bienRepository.findAll();

	}// end listAllBiens

	/**
	 * méthode exposée dans le ws rest pour récupérer une adresse via son id
	 * invoquée avec une requête HTTP GET via url :
	 * http://localhost:8080/gestion-immo/biens/get-by-id/1
	 * 
	 */
	@RequestMapping(value = "/get-by-id/{id}", method = RequestMethod.GET)
	public BienImmobilier getBienById(@PathVariable("id") Long pIdBien) {

		BienImmobilier bien = null;
		Optional<BienImmobilier> bienOpt = bienRepository.findById(pIdBien);

		if (bienOpt.isPresent()) {
			bien = bienOpt.get();
		} // end if

		return bien;

	}// end getBienById

	/**
	 * méthode exposée dans le ws rest pour ajouter un bien reçoit les données
	 * en JSON et les transforme en JAVA via JAckson (via @RequestBody) invoquée
	 * avec une requête HTTP POST via url :
	 * http://localhost:8080/gestion-immo/biens/save
	 * 
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public void addBien(@RequestBody BienImmobilier pBien) {

		bienRepository.save(pBien);

	}// end addBien

	/**
	 * méthode exposée dans le ws rest pour modifier une adresse invoquée avec une
	 * requête HTTP PUT via url :
	 * http://localhost:8080/gestion-immo/biens/update/1
	 * 
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateBien(@RequestBody BienImmobilier pBien, @PathVariable("id") Long pIdBien) {

		// récup du bien à modifier
		BienImmobilier bienToUpdate = bienRepository.getOne(pIdBien);

		// modifications
		bienToUpdate.setLibelle(pBien.getLibelle());
		bienToUpdate.setClasse(pBien.getClasse());
		bienToUpdate.setAdresse(pBien.getAdresse());
		bienToUpdate.setProprietaire(pBien.getProprietaire());
		bienToUpdate.setDescriptif(pBien.getDescriptif());
		bienToUpdate.setContrat(pBien.getContrat());
		bienToUpdate.setRevenuCadastral(pBien.getRevenuCadastral());
		bienToUpdate.setDateSoumission(pBien.getDateSoumission());
		bienToUpdate.setDateMiseADispo(pBien.getDateMiseADispo());


		// modification
		bienRepository.save(bienToUpdate);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// end updateBien

	/**
	 * méthode exposée dans le ws rest pour supprimer un bien via son id
	 * invoquée avec une requête HTTP DELETE via url :
	 * http://localhost:8080/gestion-immo/biens/delete/1
	 * 
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteBienById(@PathVariable("id") Long pIdBien) {

		bienRepository.deleteById(pIdBien);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// end deleteBienById
	
	
}// end class
