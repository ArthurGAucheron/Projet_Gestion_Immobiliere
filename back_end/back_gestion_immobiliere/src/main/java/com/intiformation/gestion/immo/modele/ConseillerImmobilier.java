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

/**
 * Classe mappé à partie la table ConseillerImmobilier de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name = "Conseillers")
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
	@OneToMany(cascade=CascadeType.ALL, mappedBy="conseillers")
	private List<Visite> visite;
	
	/**
	 * Association OneToMany
	 * One Conseillers To Many Contrat
	 */
	@OneToMany(cascade=CascadeType.ALL, mappedBy="conseillers")
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
		super();
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

	public List<Visite> getVisite() {
		return visite;
	}

	public void setVisite(List<Visite> visite) {
		this.visite = visite;
	}

	public List<Contrat> getContrat() {
		return contrat;
	}

	public void setContrat(List<Contrat> contrat) {
		this.contrat = contrat;
	}
	
	

}// END CLASS
