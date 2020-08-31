package com.intiformation.gestion.immo.modele;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "biens_achat")
@DiscriminatorValue(value="ACH")
public class BienAchat extends BienImmobilier {

	// ______________propriétés______________

	@Column(name = "prix")
	private double prix;

	@Column(name = "etat")
	private String etat;

	// ______________constructeurs______________

	public BienAchat() {
		// TODO Auto-generated constructor stub
	}

	public BienAchat(double prix, String etat) {
		super();
		this.prix = prix;
		this.etat = etat;
	}

	// ______________getters/setters______________

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	// ______________toString()______________
	@Override
	public String toString() {
		return "BienAchat [prix=" + prix + ", etat=" + etat + "]";
	}

}// end class
