package com.intiformation.gestion.immo.modele;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.SQLUpdate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * Classe mappé à partie la table ConseillerImmobilier de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name = "conseillers")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idConseiller", scope = Long.class)
public class ConseillerImmobilier {

	///// Prop /////
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_conseiller")
	private Long idConseiller;

	@Column(name = "identifiant")
	private String identifiant;

	@Column(name = "mot_de_passe")
	private String motDePasse;

	@Column(name = "nom")
	private String nom;

	@Column(name = "telephone")
	private String telephone;
	
	/// ASSOCIATIONS /////
	/**
	 * Association OneToMany
	 * One Conseillers To Many Visite
	 */
	@OneToMany(mappedBy="conseillers")
	@JsonIgnoreProperties(value= {"client","bienImmobilier","conseillers"})
	private List<Visite> visite;
	
	/**
	 * Association OneToMany
	 * One Conseillers To Many Contrat
	 */
	@OneToMany(mappedBy="conseillers")
	@JsonIgnoreProperties(value= {"client","bienImmobilier","conseillers"})
	private List<Contrat> contrat;
	
	////// Ctor /////
	public ConseillerImmobilier() {
	}

	/**
	 * ctor chargé conseillerImmo
	 * @param idConseiller
	 * @param identifiant
	 * @param motDePasse
	 * @param nom
	 * @param telephone
	 */
	public ConseillerImmobilier(Long idConseiller, String identifiant, String motDePasse, String nom,
			String telephone) {
		this.idConseiller = idConseiller;
		this.identifiant = identifiant;
		this.motDePasse = motDePasse;
		this.nom = nom;
		this.telephone = telephone;
	}
	

	/**
	 * Ctor chargé sans ID
	 * @param identifiant
	 * @param motDePasse
	 * @param nom
	 * @param telephone
	 */
	public ConseillerImmobilier(String identifiant, String motDePasse, String nom, String telephone) {
		this.identifiant = identifiant;
		this.motDePasse = motDePasse;
		this.nom = nom;
		this.telephone = telephone;
	}

	///// GETTERS / SETTERS /////
	
	public Long getIdConseiller() {
		return idConseiller;
	}

	public void setIdConseiller(Long idConseiller) {
		this.idConseiller = idConseiller;
	}

	public String getIdentifiant() {
		return identifiant;
	}

	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
	}

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	
	

}// END CLASS
