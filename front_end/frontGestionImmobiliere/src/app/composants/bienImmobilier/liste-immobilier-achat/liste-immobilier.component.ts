import { Component, OnInit } from '@angular/core';

import { BienImmobilierService } from "src/app/services/bien-immobilier/bien-immobilier.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-immobilier',
  templateUrl: './liste-immobilier.component.html',
  styleUrls: ['./liste-immobilier.component.css']
})
export class ListeImmobilierComponent implements OnInit {

  // ========== Propriétés ============
  biensAchat = [];
  
  // ========== Constructeurs ============
  constructor(private bienService : BienImmobilierService , private router : Router) { }


  // ========== Méthodes ============
  ngOnInit(): void {
    this.findAllAchatBien();
  }
  findAllAchatBien(){
    this.bienService.getAllAchat().subscribe(data => this.biensAchat=data)
  }

  consulterFiche(idBienImmo : number){
    this.router.navigate(['bienImmoAchat/fiche',idBienImmo]);
  }
}
