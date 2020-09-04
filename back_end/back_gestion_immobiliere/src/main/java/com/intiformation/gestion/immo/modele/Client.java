package com.intiformation.gestion.immo.modele;

import java.io.Serializable;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


/**
 * modèle de données pour un client
 * 
 * @author marle
 *
 */
@Entity
@Table(name = "clients")
public class Client implements Serializable {

	/* _______________ propriétés ______________ */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_client")
	private Long idClient;

	@Column(name = "nom")
	private String nom;

	@Column(name = "telephone")
	private String telephone;

	// +++++++ associations +++++++++
	// association avec Adresse : Many to One (plusieurs clients pour une adresse)
	@ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name = "adresse_id", referencedColumnName = "id_adresse")
	private Adresse adresse;

	@ManyToMany
	@JoinTable(name = "clients_assoc_biens", joinColumns = @JoinColumn(name = "client_id"), inverseJoinColumns = @JoinColumn(name = "bien_id"))
	@JsonIgnoreProperties(value= {"classe","proprietaire","adresse","contrat", "visite", "client"})
	private List<BienImmobilier> biensImmobiliers;

	// association avec ClasseStandard : Many to Many (plusieurs clients pour
	// plusieurs classes standards)
	@ManyToMany(cascade= {CascadeType.MERGE,CascadeType.PERSIST})
	@JoinTable(name = "clients_assoc_classe", joinColumns = @JoinColumn(name = "client_id"), inverseJoinColumns = @JoinColumn(name = "classe_id"))
	@JsonIgnoreProperties(value= {"biensImmobilier","clients"})
	private List<ClasseStandard> classesStandard;

	// association avec Visite : One to Many (un client pour plusieurs visites)
	@OneToMany(targetEntity=Visite.class, mappedBy = "client", cascade=CascadeType.REMOVE)
	@JsonIgnoreProperties(value= {"client","bienImmobilier","conseillers"})
	private List<Visite> visites;

	//association avec Contrat : One to Many (un client pour plusieurs contrats)
	@OneToMany(targetEntity=Contrat.class, mappedBy="client", cascade=CascadeType.REMOVE)
	@JsonIgnoreProperties(value= {"client","bienImmobilier","conseillers"})
	private List<Contrat> contrats;

	/* _______________ ctor ______________ */
	/**
	 * ctor vide
	 */
	public Client() {
	}

	/* _______________ getters/setters ______________ */

	public Long getIdClient() {
		return idClient;
	}

	public void setIdClient(Long idClient) {

		this.idClient = idClient;
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

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}

	public List<BienImmobilier> getBiensImmobiliers() {
		return biensImmobiliers;
	}

	public void setBiensImmobiliers(List<BienImmobilier> biensImmobiliers) {
		this.biensImmobiliers = biensImmobiliers;
	}

	public List<ClasseStandard> getClassesStandard() {
		return classesStandard;
	}

	public void setClassesStandard(List<ClasseStandard> classesStandard) {
		this.classesStandard = classesStandard;
	}

	public List<Visite> getVisites() {
		return visites;
	}

	public void setVisites(List<Visite> visites) {
		this.visites = visites;
	}

	public List<Contrat> getContrats() {
		return contrats;
	}

	public void setContrats(List<Contrat> contrats) {
		this.contrats = contrats;
	}
	
	

}// end class
