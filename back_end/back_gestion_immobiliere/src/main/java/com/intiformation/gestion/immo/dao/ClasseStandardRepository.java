package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiformation.gestion.immo.modele.ClasseStandard;

public interface ClasseStandardRepository extends JpaRepository<ClasseStandard, Integer> {
	
	public ClasseStandard findBytypeBiens(String pTypeBiens) ;
	public ClasseStandard findBymodeOffre(String pTypeBiens) ;
	public ClasseStandard findByprixMax(double pPrixMax) ;
	public ClasseStandard findBysuperficieMin(double pSuperficieMin) ;

}//end interface
