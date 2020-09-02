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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "classes")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idClasse", scope = Long.class)
public class ClasseStandard {

	// ______________propriétés______________

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_classe")
	private Long idClasse;

	@Column(name = "type_biens")
	private String typeBiens;

	@Column(name = "mode_offre")
	private String modeOffre;

	@Column(name = "prix_max")
	private double prixMax;

	@Column(name = "superficie_min")
	private double superficieMin;
	
	@OneToMany(targetEntity=BienImmobilier.class, mappedBy="classe", cascade=CascadeType.REMOVE)
	@JsonIgnoreProperties(value= {"classe","proprietaire","adresse","contrat"})
	private List<BienImmobilier> biensImmobilier;

	// ______________constructeurs______________

	public ClasseStandard() {

	}

	public ClasseStandard(Long idClasse, String typeBiens, String modeOffre, double prixMax, double superficieMin) {
		super();
		this.idClasse = idClasse;
		this.typeBiens = typeBiens;
		this.modeOffre = modeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	public ClasseStandard(String typeBiens, String modeOffre, double prixMax, double superficieMin) {
		super();
		this.typeBiens = typeBiens;
		this.modeOffre = modeOffre;
		this.prixMax = prixMax;
		this.superficieMin = superficieMin;
	}

	// ______________getters/setters______________

	public Long getIdClasse() {
		return idClasse;
	}

	public void setIdClasse(Long idClasse) {
		this.idClasse = idClasse;
	}

	public String getTypeBiens() {
		return typeBiens;
	}

	public void setTypeBiens(String typeBiens) {
		this.typeBiens = typeBiens;
	}

	public String getModeOffre() {
		return modeOffre;
	}

	public void setModeOffre(String modeOffre) {
		this.modeOffre = modeOffre;
	}

	public double getPrixMax() {
		return prixMax;
	}

	public void setPrixMax(double prixMax) {
		this.prixMax = prixMax;
	}

	public double getSuperficieMin() {
		return superficieMin;
	}

	public void setSuperficieMin(double superficieMin) {
		this.superficieMin = superficieMin;
	}

	// ______________toString()______________

	@Override
	public String toString() {
		return "ClasseStandard [idClasse=" + idClasse + ", typeBiens=" + typeBiens + ", modeOffre=" + modeOffre
				+ ", prixMax=" + prixMax + ", superficieMin=" + superficieMin + "]";
	}

}// end class
