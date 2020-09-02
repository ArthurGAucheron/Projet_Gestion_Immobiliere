import { Component, OnInit } from '@angular/core';

import { BienImmobilierService } from "src/app/services/bien-immobilier/bien-immobilier.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-immobilier',
  templateUrl: './liste-immobilier.component.html',
  styleUrls: ['./liste-immobilier.component.css']
})
export class ListeImmobilierComponent implements OnInit {

  biensLocation = [];
  biensAchat = [];
  
  constructor(private bienService : BienImmobilierService , private router : Router) { }


  ngOnInit(): void {
  }

  /* =============================================================================== */
  /* ============= METHODES POUR LES BIENS A ACHETER =============================== */
  /* =============================================================================== */
  findAllAchatBien(){
    this.bienService.getAllAchat().subscribe(data => this.biensAchat=data)
  }

  /* =============================================================================== */
  /* ================= METHODES POUR LES LOCATIONS ================================= */
  /* =============================================================================== */

  findAllLocation(){

    this.bienService.getAllLocation().subscribe(data => this.biensLocation=data);
  }
}
