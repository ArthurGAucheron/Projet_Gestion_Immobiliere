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

import com.intiformation.gestion.immo.dao.ClientRepository;
import com.intiformation.gestion.immo.modele.Client;

/**
 * implémentation d'un ws REST pour le client avec Spring Web Services
 * accessible via l'url : http://localhost:8080/gestion-immo/clients
 * @author marle
 *
 */
@RestController
@RequestMapping(value="clients")
public class ClientWSRestSpringWS {

	//déclaration du repository et injection avec spring
	@Autowired
	private ClientRepository clientRepository;

	/**
	 * setter couche repository pour injection spring
	 * @param clientRepository
	 */
	public void setClientRepository(ClientRepository clientRepository) {
		this.clientRepository = clientRepository;
	}
	
	/*===============================================================================*/
	/*============== Méthodes à exposer dans le web service REST ====================*/
	/*===============================================================================*/
	/**
	 * méthode exposée dans le ws rest pour récupérer la liste des clients 
	 * renvoit les données en JSON 
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/clients/getall
	 * 
	 */
	@RequestMapping(value="/getall", method=RequestMethod.GET)
	public List<Client> listAllClients() {
		
		return clientRepository.findAll();
	
	}//end listAllClients
	
	/**
	 * méthode exposée dans le ws rest pour récupérer un client via son id
	 * invoquée avec une requête HTTP GET via url : http://localhost:8080/gestion-immo/clients/get-by-id/1
	 * 
	 */
	@RequestMapping(value="/get-by-id/{id}", method=RequestMethod.GET)
	public Client getClientById(@PathVariable("id") Long pIdClient) {
		
		Client client = null;
		Optional<Client> clientOpt =  clientRepository.findById(pIdClient);
		
		if(clientOpt.isPresent()) {
			client = clientOpt.get();
		}//end if
		
		return client;
	
	}//end getClientById
	
	/**
	 * méthode exposée dans le ws rest pour ajouter un client 
	 * reçoit les données en JSON et les transforme en JAVA via JAckson (via @RequestBody)
	 * invoquée avec une requête HTTP POST via url : http://localhost:8080/gestion-immo/clients/save
	 * 
	 */
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public ResponseEntity<Boolean> addClient(@RequestBody Client pClient) {
		
		clientRepository.save(pClient);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}//end addClient
	
	/**
	 * méthode exposée dans le ws rest pour modifier un client 
	 * invoquée avec une requête HTTP PUT via url : http://localhost:8080/gestion-immo/clients/update/1
	 * 
	 */
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Boolean> updateClient(@RequestBody Client pClient, @PathVariable("id") Long pIdClient) {
				
		//récup du client à modifier
		Client clientToUpdate = clientRepository.getOne(pIdClient);
		
		//modifications
		clientToUpdate.setNom(pClient.getNom());
		clientToUpdate.setTelephone(pClient.getTelephone());
		//clientToUpdate.setAdresse(pClient.getAdresse());
		
		//modification
		clientRepository.save(clientToUpdate);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);

	}//end updateClient
	
	/**
	 * méthode exposée dans le ws rest pour supprimer un client via son id
	 * invoquée avec une requête HTTP DELETE via url : http://localhost:8080/gestion-immo/clients/delete/1
	 * 
	 */
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteClientById(@PathVariable("id") Long pIdClient) {
				
		clientRepository.deleteById(pIdClient);
		return new ResponseEntity<>(Boolean.TRUE, HttpStatus.OK);
	
	}//end deleteClientById

}//end class
