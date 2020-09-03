import { Component, OnInit } from '@angular/core';
import { BienAchat } from 'src/app/modeles/BienAchat';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-immobilier-achat',
  templateUrl: './fiche-immobilier-achat.component.html',
  styleUrls: ['./fiche-immobilier-achat.component.css']
})
export class FicheImmobilierAchatComponent implements OnInit {
  // ========== Propriétés ============

  bien : any = null;

  // ========== Constructeurs ============
  constructor(private bienImmoService : BienImmobilierService, private activatedRoute : ActivatedRoute) { }

  // ========== Méthodes ============
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramsMap) => { 
    const idBienImmo = +paramsMap.get("id");
    this.getBienAchatById(idBienImmo);
  });
  }

  getBienAchatById(idBienImmo : number){
    this.bienImmoService.getAchatById(idBienImmo).subscribe(data => this.bien=data);
  }
}
