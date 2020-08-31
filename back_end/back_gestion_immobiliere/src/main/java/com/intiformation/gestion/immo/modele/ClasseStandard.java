package com.intiformation.gestion.immo.modele;



import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "classes")
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
		private double SuperficieMin;
		
		
}//end class
