package com.intiformation.gestion.immo.modele;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



/**
 * Classe mappé par rapport à la table Visite de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name="Visites")
public class Visite {
	
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
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="conseiller_id", referencedColumnName="id_conseiller")
	private ConseillerImmobilier conseiller;
	
	
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

	public ConseillerImmobilier getConseiller() {
		return conseiller;
	}

	public void setConseiller(ConseillerImmobilier conseiller) {
		this.conseiller = conseiller;
	}
	
	

}//END CLASS
