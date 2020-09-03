import { Component, OnInit } from '@angular/core';
import { BienLocation } from 'src/app/modeles/BienLocation';
import { BienAchat } from 'src/app/modeles/BienAchat';
import { ClasseStandardService } from 'src/app/services/classe-standard/classe-standard.service';
import { ProprietaireService } from 'src/app/services/propietaire/proprietaire.service';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { ActivatedRoute } from '@angular/router';
import { Adresse } from 'src/app/modeles/Adresse';

@Component({
  selector: 'app-create-immobilier',
  templateUrl: './create-immobilier.component.html',
  styleUrls: ['./create-immobilier.component.css']
})
export class CreateImmobilierComponent implements OnInit {
  
  // =========== Propriétés ===========
  bienAchat : BienAchat = {
    idBien : null,
    libelle : null,
    statut : null,
    dateSoumission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
    classe : null,
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    prix : null,
    etat : null,
  }

  bien : BienAchat;

  bienLocation : BienLocation = {

    idBien : null,
    libelle : null,
    statut : null,
    dateSoumission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
    classe : null,
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    montantCaution : null,
    loyerMensuel : null,
    montantMensuelCharges : null,
    typeBail : null,
    garniture : null,
  }
  
  adresse : Adresse = {
    idAdresse: null,
    numero: null,
    rue: null,
    codePostal : null,
    localite : null,
    pays: null
  }

  listeClasse = [];
  listeProprietaire = [];
  typeDeBien : boolean = true;

  // =========== Constructeurs ===========
  constructor(private classeService : ClasseStandardService, private propService : ProprietaireService, private bienService : BienImmobilierService, private activatedRoute : ActivatedRoute) { }

  // =========== Méthoides ===========
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((paramsMap)=> {
      // récup du param id de l'URL (réf : route 'edit/:id' de app-routing.module.ts)
      // + pour faire le CAST
      const idBien = +paramsMap.get("id");

      // appel de la méthode 'findEmployeById()' avec l'id de l'employé
      // pour récupérer l'employé à modifier
      this.getBienById(idBien);

    });
    this.getAllClass();
    this.getAllProp();
  }
  saveOrUpdateBien(){

    if ( (this.typeDeBien == true) && (this.bienAchat.idBien == null)) {
      
      this.bienAchat.adresse = this.adresse;
      // => ajout d'un bien avec un type d'offre "à vendre"
      this.bienService.addBienAchat(this.bienAchat).subscribe();
      console.log("dans l'ajout");
    }
    console.log("dans la méthode");
  }

  getAllClass(){
    this.classeService.getAllClasseStandard().subscribe(data => this.listeClasse=data);
  }

  getAllProp(){
    this.propService.getAllProprietaireFromWsRest().subscribe(data => this.listeProprietaire=data);
  }

  changeOffre(){
    this.typeDeBien=!this.typeDeBien;
  }

  getBienById(pIdBien : number){
    
    if (pIdBien == 0) {
      this.bienLocation = {idBien : null,libelle : null,statut : null,dateSoumission : null,dateMiseADispo : null,
        revenuCadastral : null,descriptif : null,classe : null,visites : null, contrat :null, proprietaire :null,
        adresse : null,listeClients : null,montantCaution : null,loyerMensuel : null,montantMensuelCharges : null,typeBail : null,garniture : null,};

        this.bienAchat = {idBien : null,libelle : null,statut : null,dateSoumission : null,dateMiseADispo : null,revenuCadastral : null,descriptif : null,
          classe : null,visites : null,contrat :null,proprietaire :null,adresse : null,listeClients : null, prix : null,etat : null,};

 
      
    } else {
      this.bienService.getAchatById(pIdBien).subscribe()
    }
    
  }
}
