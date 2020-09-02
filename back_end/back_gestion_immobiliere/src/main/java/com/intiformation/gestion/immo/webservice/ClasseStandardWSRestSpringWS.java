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

import com.intiformation.gestion.immo.dao.ClasseStandardRepository;
import com.intiformation.gestion.immo.modele.Adresse;
import com.intiformation.gestion.immo.modele.BienImmobilier;
import com.intiformation.gestion.immo.modele.ClasseStandard;

@RestController
@RequestMapping(value = "classes")
public class ClasseStandardWSRestSpringWS {

	// déclaration du repository et injection avec spring
	@Autowired
	private ClasseStandardRepository classeRepository;

	/**
	 * setter couche repository pour injection spring
	 * 
	 * @param classeRepository
	 */
	public void setClasseStandard(ClasseStandardRepository classeRepository) {
		this.classeRepository = classeRepository;
	}

	/*
	 * ======================================================================
	 * ============== Méthodes à exposer dans le web service REST
	 * =====================================================================
	 */

	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des classes renvoit les
	 * données en JSON invoquée avec une requête HTTP GET via url :
	 * http://localhost:8080/gestion-immo/classes/getall
	 * 
	 */
	@RequestMapping(value = "/getall", method = RequestMethod.GET)
	public List<ClasseStandard> listAllClasses() {

		return classeRepository.findAll();

	}// end listAllClasses

	/**
	 * méthode exposée dans le ws rest pour récupérer une classe via son id
	 * invoquée avec une requête HTTP GET via url :
	 * http://localhost:8080/gestion-immo/classes/get-by-id/1
	 * 
	 */
	@RequestMapping(value = "/get-by-id/{id}", method = RequestMethod.GET)
	public ClasseStandard getClasseById(@PathVariable("id") Long pIdClasse) {

		ClasseStandard classe = null;
		Optional<ClasseStandard> classeOpt = classeRepository.findById(pIdClasse);

		if (classeOpt.isPresent()) {
			classe = classeOpt.get();
		} // end if

		return classe;

	}// end getClasseById

	/**
	 * méthode exposée dans le ws rest pour ajouter une classe reçoit les données
	 * en JSON et les transforme en JAVA via JAckson (via @RequestBody) invoquée
	 * avec une requête HTTP POST via url :
	 * http://localhost:8080/gestion-immo/classes/save
	 * 
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public void addClasse(@RequestBody ClasseStandard pClasse) {

		classeRepository.save(pClasse);

	}// end addClasse

	/**
	 * méthode exposée dans le ws rest pour modifier une classe invoquée avec une
	 * requête HTTP PUT via url :
	 * http://localhost:8080/gestion-immo/classes/update/1
	 * 
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Boolean> updateClasse(@RequestBody ClasseStandard pClasse, @PathVariable("id") Long pIdClasse) {

		// récup de la classe à modifier
		ClasseStandard classeToUpdate = classeRepository.getOne(pIdClasse);

		// modifications
		classeToUpdate.setModeOffre(pClasse.getModeOffre());
		classeToUpdate.setTypeBiens(pClasse.getTypeBiens());
		classeToUpdate.setPrixMax(pClasse.getPrixMax());
		classeToUpdate.setSuperficieMin(pClasse.getSuperficieMin());

		// modification
		classeRepository.save(classeToUpdate);

		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// end updateClasse

	/**
	 * méthode exposée dans le ws rest pour supprimer une classe via son id
	 * invoquée avec une requête HTTP DELETE via url :
	 * http://localhost:8080/gestion-immo/classes/delete/1
	 * 
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteClasseById(@PathVariable("id") Long pIdClasse) {

		classeRepository.deleteById(pIdClasse);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}// end deleteClasseById

}// end class
