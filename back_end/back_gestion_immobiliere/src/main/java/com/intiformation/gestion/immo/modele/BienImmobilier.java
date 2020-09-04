package com.intiformation.gestion.immo.modele;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name ="biens_immobiliers")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(
	    name="type",
	    discriminatorType=DiscriminatorType.STRING)
public abstract class BienImmobilier implements Serializable {

	
	// ______________propriétés______________

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_bien")
	private Long idBien;

	@Column(name = "libelle")
	private String libelle;
	
	@Column(name = "statut")
	private String statut;

	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name = "date_soumission")
	private Date dateSoumission;

	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name = "date_mise_a_dispo")
	private Date dateMiseADispo;

	@Column(name = "revenu_cadastral")
	private double revenuCadastral;

	@Column(name = "descriptif")
	private String descriptif;

	@ManyToOne
	@JsonIgnoreProperties(value= {"biensImmobilier"})
	@JoinColumn(name="classe_id", referencedColumnName="id_classe")
	private ClasseStandard classe;

	@ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinColumn(name="adresse_id", referencedColumnName="id_adresse")
	private Adresse adresse;

	/**
	 * Association entre BienImmobilier et propriétaire
	 * Many bienimmo To One Proprio
	 */

	@ManyToOne
	@JoinColumn(name="proprietaire_id", referencedColumnName="id_proprietaire")
	@JsonIgnoreProperties(value= {"adresse","biensImmobiliers"})
	private Proprietaire proprietaire;
	
	/**
	 * Association entre BienImmobilier et contrat
	 * One bienimmo To One Contrat
	 */

	@OneToOne(mappedBy="bienImmobilier", cascade=CascadeType.REMOVE)
	//@JoinColumn(name="bien_id", referencedColumnName="id_bien")
	@JsonIgnoreProperties(value= {"bienImmobilier"})	
	private Contrat contrat;
	

	@OneToMany(mappedBy="bienImmobilier", cascade=CascadeType.REMOVE)
	@JsonIgnoreProperties(value= {"conseillers","bienImmobilier","client"})	
	private List<Visite> visite;
	
	@ManyToMany(mappedBy="biensImmobiliers")
	@JsonIgnoreProperties(value= {"biensImmobiliers","classesStandard","visites","contrats"})
	private List<Client> client;


	// ______________constructeurs______________

	public BienImmobilier() {
	}// end ctor vide

	public BienImmobilier(Long idBien, String libelle, Date dateSoumission, Date dateMiseADispo, double revenuCadastral,
			String descriptif, ClasseStandard classe,  Adresse adresse) {
		super();
		this.idBien = idBien;
		this.libelle = libelle;
		this.dateSoumission = dateSoumission;
		this.dateMiseADispo = dateMiseADispo;
		this.revenuCadastral = revenuCadastral;
		this.descriptif = descriptif;
		this.classe = classe;
		this.adresse=adresse;
	}// end ctor chargé

	public BienImmobilier(String libelle, Date dateSoumission, Date dateMiseADispo, double revenuCadastral,
			String descriptif, ClasseStandard classe, Adresse adresse) {
		super();
		this.libelle = libelle;
		this.dateSoumission = dateSoumission;
		this.dateMiseADispo = dateMiseADispo;
		this.revenuCadastral = revenuCadastral;
		this.descriptif = descriptif;
		this.classe = classe;
		this.adresse=adresse;
	}// end ctor chargé sans id

	
	
	
	public BienImmobilier(Long idBien, String libelle, String statut, Date dateSoumission, Date dateMiseADispo,
			double revenuCadastral, String descriptif, ClasseStandard classe, Adresse adresse,
			Proprietaire proprietaire) {
		super();
		this.idBien = idBien;
		this.libelle = libelle;
		this.statut = statut;
		this.dateSoumission = dateSoumission;
		this.dateMiseADispo = dateMiseADispo;
		this.revenuCadastral = revenuCadastral;
		this.descriptif = descriptif;
		this.classe = classe;
		this.adresse = adresse;
		this.proprietaire = proprietaire;
	}

	// ______________getters/setters______________

	public Long getIdBien() {
		return idBien;
	}

	public void setIdBien(Long idBien) {
		this.idBien = idBien;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public Date getDateSoumission() {
		return dateSoumission;
	}

	public void setDateSoumission(Date dateSoumission) {
		this.dateSoumission = dateSoumission;
	}

	public Date getDateMiseADispo() {
		return dateMiseADispo;
	}

	public void setDateMiseADispo(Date dateMiseADispo) {
		this.dateMiseADispo = dateMiseADispo;
	}

	public double getRevenuCadastral() {
		return revenuCadastral;
	}

	public void setRevenuCadastral(double revenuCadastral) {
		this.revenuCadastral = revenuCadastral;
	}

	public String getDescriptif() {
		return descriptif;
	}

	public void setDescriptif(String descriptif) {
		this.descriptif = descriptif;
	}

	public ClasseStandard getClasse() {
		return classe;
	}

	public void setClasse(ClasseStandard classe) {
		this.classe = classe;
	}

	public Adresse getAdresse() {
		return adresse;
	}

	public void setAdresse(Adresse adresse) {
		this.adresse = adresse;
	}
	
	
	public Proprietaire getProprietaire() {
		return proprietaire;
	}

	public void setProprietaire(Proprietaire proprietaire) {
		this.proprietaire = proprietaire;
	}

	public Contrat getContrat() {
		return contrat;
	}

	public void setContrat(Contrat contrat) {
		this.contrat = contrat;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public List<Visite> getVisite() {
		return visite;
	}

	public void setVisite(List<Visite> visite) {
		this.visite = visite;
	}

	public List<Client> getClient() {
		return client;
	}

	public void setClient(List<Client> client) {
		this.client = client;
	}

	
	
	
	// ______________toString()______________

//	@Override
//	public String toString() {
//		return "BienImmobilier [idBien=" + idBien + ", libelle=" + libelle + ", dateSoumission=" + dateSoumission
//				+ ", dateMiseADispo=" + dateMiseADispo + ", revenuCadastral=" + revenuCadastral + ", descriptif="
//				+ descriptif + ", classe=" + classe + "]";
//	}



}// end class
