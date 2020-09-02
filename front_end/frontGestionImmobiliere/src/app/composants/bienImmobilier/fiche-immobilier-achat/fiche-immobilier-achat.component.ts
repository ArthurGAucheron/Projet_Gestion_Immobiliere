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
  bienAchat : BienAchat = {
    idBien : null,
    libelle : null,
    statut : null,
    dateSoummission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
    classeStandard : null,
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    prixDemande : null,
    etat : null,
  }

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
    this.bienImmoService.getAchatById(idBienImmo).subscribe(data => this.bienAchat=data);
  }
}
