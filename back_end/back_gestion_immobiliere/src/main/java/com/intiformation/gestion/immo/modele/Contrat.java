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
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * Classe mappé sur la table Contrat de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name="contrats")
public class Contrat {
	
	////// PROP //////
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_contrat")
	private Long idContrat;
	
	@Column(name="prix_acquisition")
	private Double prixAcquisition; 
	
	@Column(name="date_acquisition")
	private Date dateAcquisition;
	
	////// ASSOCIATIONS //////
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Contrat et l'entité ConseillerImmobiliers 
	 * Avec Many contrat To One Conseiller
	 */
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="conseiller_id" , referencedColumnName="id_conseiller")
	private ConseillerImmobilier conseillers;
	
	/**
	 * Assocation entre bienImmo et contrat de type One To One
	 */
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="bien_id", referencedColumnName="id_bien")
	private BienImmobilier bienImmobilier;
	
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Visite et l'entité clients 
	 * Avec Many Visite To One Client
	 */
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="client_id", referencedColumnName="id_client")
	private Client client;
	
	///// CTOR ///////
	public Contrat() {
	}

	/**
	 * ctor chargé Contrat
	 * @param idContrat
	 * @param prixAcquisition
	 * @param dateAcquisition
	 */
	public Contrat(Long idContrat, Double prixAcquisition, Date dateAcquisition) {
		this.idContrat = idContrat;
		this.prixAcquisition = prixAcquisition;
		this.dateAcquisition = dateAcquisition;
	}
	
	
	/**
	 * ctor chargé sans ID
	 * @param prixAcquisition
	 * @param dateAcquisition
	 */
	public Contrat(Double prixAcquisition, Date dateAcquisition) {
		this.prixAcquisition = prixAcquisition;
		this.dateAcquisition = dateAcquisition;
	}

	///// GETTERS / SETTERS /////
	
	public Long getIdContrat() {
		return idContrat;
	}

	public void setIdContrat(Long idContrat) {
		this.idContrat = idContrat;
	}

	public Double getPrixAcquisition() {
		return prixAcquisition;
	}

	public void setPrixAcquisition(Double prixAcquisition) {
		this.prixAcquisition = prixAcquisition;
	}

	public Date getDateAcquisition() {
		return dateAcquisition;
	}

	public void setDateAcquisition(Date dateAcquisition) {
		this.dateAcquisition = dateAcquisition;
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
	
	

}// END CLASS
