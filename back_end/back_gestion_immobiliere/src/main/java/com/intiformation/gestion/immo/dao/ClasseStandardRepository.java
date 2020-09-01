package com.intiformation.gestion.immo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intiformation.gestion.immo.modele.ClasseStandard;

@Repository
public interface ClasseStandardRepository extends JpaRepository<ClasseStandard, Long> {
	
	public ClasseStandard findBytypeBiens(String pTypeBiens) ;
	public ClasseStandard findBymodeOffre(String pTypeBiens) ;
	public ClasseStandard findByprixMax(double pPrixMax) ;
	public ClasseStandard findBysuperficieMin(double pSuperficieMin) ;

}//end interface
