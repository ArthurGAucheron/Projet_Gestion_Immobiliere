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
 * Classe mappé sur la table Contrat de la bdd <br/>
 * @author giovanni
 *
 */
@Entity
@Table(name="Contrats")
public class Contrat {
	
	////// PROP //////
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_contrat")
	private Long idContrat;
	
	@Column(name="PrixAcquisition")
	private Double prixAcquisition;
	
	@Column(name="DateAcquisition")
	private Date dateAcquisition;
	
	////// ASSOCIATIONS //////
	/**
	 * Assocations de type ManyToOne 
	 * Associations entre l'entité Contrat et l'entité ConseillerImmobiliers 
	 * Avec Many contrat To One Conseiller
	 */
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="conseiller_id" , referencedColumnName="id_conseiller")
	private ConseillerImmobilier conseiller;

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

	public ConseillerImmobilier getConseiller() {
		return conseiller;
	}

	public void setConseiller(ConseillerImmobilier conseiller) {
		this.conseiller = conseiller;
	}
	

}// END CLASS
