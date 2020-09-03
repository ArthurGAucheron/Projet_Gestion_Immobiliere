import { Component, OnInit, OnDestroy } from '@angular/core';

import { BienImmobilierService } from "src/app/services/bien-immobilier/bien-immobilier.service";
import { Router } from '@angular/router';
import { BienAchat } from 'src/app/modeles/BienAchat';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-liste-immobilier',
  templateUrl: './liste-immobilier.component.html',
  styleUrls: ['./liste-immobilier.component.css']
})



export class ListeImmobilierComponent implements OnInit {

  // ========== Propriétés ============
  biens = [];
  biensAchat = [];
  biensLocation = [];
  avendre ="à vendre";
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject();
  
  // ========== Constructeurs ============
  constructor(private bienService : BienImmobilierService , private router : Router) { }


  // ========== Méthodes ============
  ngOnInit(): void {
    this.findAllAchatBien();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  findAllAchatBien(){
    this.bienService.getAllAchat().subscribe(data => {this.biens=data;
      this.dtTrigger.next();});
    
  }// end findAll()

  consulterFiche(idBienImmo : number){
    this.router.navigate(['bienImmoAchat/fiche',idBienImmo]);
  }

  
}
