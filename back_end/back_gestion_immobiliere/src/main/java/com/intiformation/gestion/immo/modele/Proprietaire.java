package com.intiformation.gestion.immo.modele;


import java.io.Serializable;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


import javax.persistence.OneToMany;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * modèle de données pour un propriétaire
 * @author marle
 *
 */
@Entity
@Table(name="proprietaires")
@JsonIgnoreProperties({"bienImmobiliers"})
public class Proprietaire implements Serializable {


	/*_______________ propriétés ______________*/
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_proprietaire")
	private Long idProprietaire;

	@Column(name="nom")
	private String nom;
	
	@Column(name="tel_prive")
	private String telPrive;
	
	@Column(name="tel_travail")
	private String telTravail;
	
	//+++++++ associations +++++++++
	//association avec Adresse : Many to One (plusieurs propriétaires pour une adresse)
	@ManyToOne
	@JoinColumn(name="adresse_id", referencedColumnName="id_adresse")
	private Adresse adresse;
	
	//association avec BienImmobilier : One to Many (un propriétaire pour plusieurs bien immobilier)

	//@OneToMany(targetEntity=BienImmoblier.class, mappedBy="idBien")
	//private List<BienImmoblier> biensImmobiliers;

	@OneToMany(targetEntity=BienImmobilier.class, mappedBy="idBien")
	private List<BienImmobilier> biensImmobiliers;


	
	/*_______________ ctor ______________*/
	/**
	 * ctor vide
	 */
	public Proprietaire() {

	}

	
	/*_______________ getters/setters ______________*/
	
	public Long getIdProprietaire() {
		return idProprietaire;
	}

	public void setIdProprietaire(Long idProprietaire) {

		this.idProprietaire = idProprietaire;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getTelPrive() {
		return telPrive;
	}

	public void setTelPrive(String telPrive) {
		this.telPrive = telPrive;
	}

	public String getTelTravail() {
		return telTravail;
	}

	public void setTelTravail(String telTravail) {
		this.telTravail = telTravail;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}


	/*
	public List<BienImmoblier> getBiensImmobiliers() {
		return biensImmobiliers;
	}
	public void setBiensImmobiliers(List<BienImmoblier> biensImmobiliers) {
		this.biensImmobiliers = biensImmobiliers;
	}
	*/

	
	public List<BienImmobilier> getBiensImmobiliers() {
		return biensImmobiliers;
	}

	public void setBiensImmobiliers(List<BienImmobilier> biensImmobiliers) {
		this.biensImmobiliers = biensImmobiliers;
	}
	

	
	
}//end class
