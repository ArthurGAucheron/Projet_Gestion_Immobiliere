package com.intiformation.gestion.immo.modele;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;




/**
 * Classe mappé par rapport à la table Visite de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name="visites")
public class Visite implements Serializable  {
	
	//// PROP //////
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_visite")
	private Long idVisite;
	
	@Column(name="dateVisite")
	private Date dateVisite;
	
	///// ASSOCIATION /////
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Visite et l'entité ConseillerImmobiliers 
	 * Avec Many visite To One Conseiller
	 */
	@ManyToOne
	@JoinColumn(name="conseiller_id", referencedColumnName="id_conseiller")
	@JsonIgnoreProperties(value= {"visite","contrat"})
	private ConseillerImmobilier conseillers;
	
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Visite et l'entité BienImmobilier 
	 * Avec Many Visite To One BienImmo
	 */
	@ManyToOne
	@JoinColumn(name="bien_id", referencedColumnName="id_bien")
	@JsonIgnoreProperties(value= {"visite","contrat","classe"})
	private BienImmobilier bienImmobilier;
	
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Visite et l'entité clients 
	 * Avec Many Visite To One Client
	 */
	@ManyToOne
	@JoinColumn(name="client_id", referencedColumnName="id_client")
	@JsonIgnoreProperties(value= {"visite","contrat","biensImmobiliers"})
	private Client client;
	
	
	///// CTOR ///////
	public Visite() {
	}

	/**
	 * Ctor chargé 
	 * @param idVisite
	 * @param dateVisite
	 */
	public Visite(Long idVisite, Date dateVisite) {
		this.idVisite = idVisite;
		this.dateVisite = dateVisite;
	}
	
	
	/**
	 * ctor chargé sans ID
	 * @param dateVisite
	 */
	public Visite( Date dateVisite) {
		this.dateVisite = dateVisite;
	}


	//// GETTERS / SETTERS //////

	public Long getIdVisite() {
		return idVisite;
	}


	public void setIdVisite(Long idVisite) {
		this.idVisite = idVisite;
	}


	public Date getDateVisite() {
		return dateVisite;
	}


	public void setDateVisite(Date dateVisite) {
		this.dateVisite = dateVisite;
	}

	public ConseillerImmobilier getConseillers() {
		return conseillers;
	}

	public void setConseillers(ConseillerImmobilier conseillers) {
		this.conseillers = conseillers;
	}

	public BienImmobilier getBienImmobilier() {
		return bienImmobilier;
	}

	public void setBienImmobilier(BienImmobilier bienImmobilier) {
		this.bienImmobilier = bienImmobilier;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	
	
	

}//END CLASS
