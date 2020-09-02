
package com.intiformation.gestion.immo.modele;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * modèle de données pour une adresse
 * 
 * @author marle
 *
 */
@Entity
@Table(name="adresses")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idAdresse", scope = Long.class)
public class Adresse implements Serializable {

	/* _______________ propriétés ______________ */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_adresse")
	private Long idAdresse;

	@Column(name = "numero")
	private String numero;

	@Column(name = "rue")
	private String rue;

	@Column(name = "code_postal")
	private int codePostal;

	@Column(name = "localite")
	private String localite;

	@Column(name = "pays")
	private String pays;
	
	
	//+++++++ associations +++++++++
	//association avec Propriétaire : One to Many (une adresse pour plusieurs propriétaires)
//	@OneToMany(targetEntity=Proprietaire.class, mappedBy="adresse")
//	@JsonBackReference
//	private List<Proprietaire> proprietaires;
	
	//association avec Client : One to Many (une adresse pour plusieurs clients)
//	@OneToMany(targetEntity=Client.class, mappedBy="adresse")
//	@JsonBackReference
//	private List<Client> clients;
	
	//association avec BienImmobilier : One to Many (une adresse pour plusieurs biens)
//	@OneToMany(targetEntity=BienImmobilier.class, mappedBy="adresse")
//	@JsonBackReference
//	private List<BienImmobilier> biensImmobilier;

	/* _______________ ctor ______________ */
	/**
	 * ctor vide
	 */
	public Adresse() {
	}

	/* _______________ getters/setters ______________ */

	public Long getIdAdresse() {
		return idAdresse;
	}

	public void setIdAdresse(Long idAdresse) {

		this.idAdresse = idAdresse;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public int getCodePostal() {
		return codePostal;
	}

	public void setCodePostal(int codePostal) {
		this.codePostal = codePostal;
	}

	public String getLocalite() {
		return localite;
	}

	public void setLocalite(String localite) {
		this.localite = localite;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	/*
	public List<Proprietaire> getProprietaires() {
		return proprietaires;
	}

	public void setProprietaires(List<Proprietaire> proprietaires) {
		this.proprietaires = proprietaires;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public List<BienImmobilier> getBiensImmobilier() {
		return biensImmobilier;
	}

	public void setBiensImmobilier(List<BienImmobilier> biensImmobilier) {
		this.biensImmobilier = biensImmobilier;
	}

	@Override
	public String toString() {
		return "Adresse [idAdresse=" + idAdresse + ", numero=" + numero + ", rue=" + rue + ", codePostal=" + codePostal
				+ ", localite=" + localite + ", pays=" + pays + ", proprietaires=" + proprietaires + ", clients="
				+ clients + "]";
	}

}// end class
