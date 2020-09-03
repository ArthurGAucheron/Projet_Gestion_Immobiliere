import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisiteService } from 'src/app/services/visite/visite.service';
import { Router } from '@angular/router';
import { ClasseStandardService } from 'src/app/services/classe-standard/classe-standard.service';
import { ClientService } from 'src/app/services/client/client.service';
import { Subject } from 'rxjs';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnDestroy, OnInit {

  /*____________ props ___________ */
  visites = [];
  classesClients = [];
  classesBiens = [];
  clientsByClasse = [];
  selectedClass:number;
  clients=[];
  biens = [];

  biensConseiller=[];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  /*____________ ctor ___________ */
  constructor(private visiteService : VisiteService, 
              private classeService : ClasseStandardService,
              private clientService : ClientService,
              private bienService : BienImmobilierService,
              private router: Router) { }

  /*____________ méthodes ___________ */
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.findAllVisitesByIdConseiller(1);
    this.findAllClassesStandardsClients();
    this.findAllClassesStandardsBiens();
    this.findAllClients();
    this.findAllBienByConseiller(1);

  }//end ngOnInit

  /**
   * permet de recuperer toutes les visites d'un conseiller via son id via le service
   * @param idConseiller id du conseiller connecté
   */
  findAllVisitesByIdConseiller(pIdConseiller : number){
    this.visiteService.getVisiteByConseillerViaWsRest(pIdConseiller).subscribe(data => {this.visites = data; this.dtTrigger.next();});
  }

    /**
   * permet de recuperer tous les clients interessés par une classe standard
   * @param pIdClasse id de la classe standard
   */
  findAllClientsByIdClasse(idClasseRecherche:number){
    console.log("idClasseRecherche " + idClasseRecherche);
    this.clientService.findClientByIdClasseViaWsRest(idClasseRecherche).subscribe(data => {this.clientsByClasse = data;});
  }

  /**
   * permet de recuperer tous les clients 
   */
  findAllClients(){
    this.clientService.getAllClientFromWsRest().subscribe(data => {this.clients = data;});
  }

  /**
   * permet de recuperer toutes les classes standards
   */
  findAllClassesStandardsBiens(){
    this.classeService.getAllClasseStandard().subscribe(data => {this.classesBiens = data;});
  }

  /**
   * permet de recuperer toutes les classes standards
   */
  findAllClassesStandardsClients(){
    this.classeService.getAllClasseStandard().subscribe(data => {this.classesClients = data;});
  }

    /**
   * permet de recuperer tous les biens d'une classe standard
   */
  findAllBiensByClasseStandard(pIdClasse:number){
    console.log("pIdClasse : " +pIdClasse);
    this.bienService.getAllBiensByClass(pIdClasse).subscribe(data => {this.biens = data;});
  }

  findAllBienByConseiller(pIdConseiller:number){
    this.bienService.getAllBienByConseiller(pIdConseiller).subscribe(data => this.biensConseiller = data);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}//end class

    

  


