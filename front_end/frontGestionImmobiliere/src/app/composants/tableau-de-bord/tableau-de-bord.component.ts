import { Component, OnInit } from '@angular/core';
import { VisiteService } from 'src/app/services/visite/visite.service';
import { Router } from '@angular/router';
import { ClasseStandardService } from 'src/app/services/classe-standard/classe-standard.service';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnInit {

  /*____________ props ___________ */
  visites = [];
  classes = [];
  clientsByClasse = [];
  selectedClass:number;

  /*____________ ctor ___________ */
  constructor(private visiteService : VisiteService, 
              private classeService : ClasseStandardService,
              private clientService : ClientService) { }

  /*____________ méthodes ___________ */
  ngOnInit(): void {
    this.findAllVisitesByIdConseiller(1);
    this.findAllClassesStandards();
  }//end ngOnInit

  /**
   * permet de recuperer toutes les visites d'un conseiller via son id via le service
   * @param idConseiller id du conseiller connecté
   */
  findAllVisitesByIdConseiller(pIdConseiller : number){
    this.visiteService.getVisiteByConseillerViaWsRest(pIdConseiller).subscribe(data => this.visites = data);
  }

    /**
   * permet de recuperer tous les clients interessés par une classe standard
   * @param pIdClasse id de la classe standard
   */
  findAllClientsByIdClasse(idClasseRecherche:number){
    this.clientService.findClientByIdClasseViaWsRest(idClasseRecherche).subscribe(data => this.clientsByClasse = data);
  }

  /**
   * permet de recuperer toutes les classes standards
   */
  findAllClassesStandards(){
    this.classeService.getAllClasseStandard().subscribe(data => this.classes = data);
  }

}//end class
