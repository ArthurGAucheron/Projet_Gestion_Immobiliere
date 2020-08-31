package com.intiformation.gestion.immo.modele;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "biens_location")
@DiscriminatorValue(value="LOC")
public class BienLocation extends BienImmobilier {

	// ______________propriétés______________

	@Column(name = "caution")
	private double caution;

	@Column(name = "loyer")
	private double loyer;

	@Column(name = "charges")
	private double charges;

	@Column(name = "type_bail")
	private String typeBail;

	@Column(name = "garniture")
	private boolean garniture;

	// ______________constructeurs______________

	public BienLocation() {
	}

	public BienLocation(double caution, double loyer, double charges, String typeBail, boolean garniture) {
		super();
		this.caution = caution;
		this.loyer = loyer;
		this.charges = charges;
		this.typeBail = typeBail;
		this.garniture = garniture;
	}
	
	// ______________getters/setters______________

	public double getCaution() {
		return caution;
	}

	public void setCaution(double caution) {
		this.caution = caution;
	}

	public double getLoyer() {
		return loyer;
	}

	public void setLoyer(double loyer) {
		this.loyer = loyer;
	}

	public double getCharges() {
		return charges;
	}

	public void setCharges(double charges) {
		this.charges = charges;
	}

	public String getTypeBail() {
		return typeBail;
	}

	public void setTypeBail(String typeBail) {
		this.typeBail = typeBail;
	}

	public boolean isGarniture() {
		return garniture;
	}

	public void setGarniture(boolean garniture) {
		this.garniture = garniture;
	}

	// ______________toString()______________
	
	@Override
	public String toString() {
		return "BienLocation [caution=" + caution + ", loyer=" + loyer + ", charges=" + charges + ", typeBail="
				+ typeBail + ", garniture=" + garniture + "]";
	}

}// end class
