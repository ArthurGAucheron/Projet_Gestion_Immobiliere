import { Component, OnInit} from '@angular/core';
import { BienAchat } from 'src/app/modeles/BienAchat';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisiteService } from 'src/app/services/visite/visite.service';

@Component({
  selector: 'app-fiche-immobilier-achat',
  templateUrl: './fiche-immobilier-achat.component.html',
  styleUrls: ['./fiche-immobilier-achat.component.css']
})
export class FicheImmobilierAchatComponent implements OnInit {
  // ========== Propriétés ============

  bien : any = null;
  visite : any =null;

  // ========== Constructeurs ============
  constructor(private bienImmoService : BienImmobilierService, private activatedRoute : ActivatedRoute, private visiteService : VisiteService,
              private route : Router) { }

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

  getNameClientByIdVisite(idVisite : number){
    this.visiteService.findVisiteByIdFromWsRest(idVisite).subscribe(data => this.visite);
  }
}
