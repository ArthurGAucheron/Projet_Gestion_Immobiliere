import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Contrat } from 'src/app/modeles/Contrat';
import { Router, ActivatedRoute } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { ConseillerService } from 'src/app/services/conseiller/conseiller.service';
import { ClientService } from "src/app/services/client/client.service";

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  // ========= Propriétés ==========
  modeOffre : boolean = false;
  
  contrat : Contrat = {
    idContrat : null,
    prixAcquisition : null,
    dateAcquisition : null,
    bienImmobilier : null,
    conseiller : null,
    client : null
  }

  biensImmobilier = [];
  conseillers = [];
  clients = [];

  // ========= Constructeurs ==========
  constructor(private contratService : ContratService,
              private bienService : BienImmobilierService,
              private conseillerService : ConseillerService,
              private clientService : ClientService, 
              private router: Router, 
              private activatedRoute :ActivatedRoute) {}

  // ========= Méthodes ==========
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramsMap) => {
      const idContrat = +paramsMap.get("id");
    });
    this.findAllBiensImmo(this.modeOffre);
    this.findAllClients();
    this.findAllConseillers();
  }

  findContratById(pIdContrat : number){
    
    if (pIdContrat==0) {
      this.contrat={ idContrat : null,prixAcquisition : null,dateAcquisition : null, bienImmobilier : null,conseiller : null,client : null,}
    } else {
      this.contratService.getContratById(pIdContrat).subscribe((contratToUpdate) => {this.contrat=contratToUpdate});
    }
  }

  saveOrUpdateContrat(){

    if (this.contrat.idContrat==null) {
      this.contratService.addContrat(this.contrat).subscribe();
    } else {
      this.contratService.updateContrat(this.contrat).subscribe();
    }
    this.router.navigate(['contrat/list'])
  }

  // ========= Méthodes (pour listes rédoulanes) ==========
  
  choixModeOffre(){
    this.modeOffre = !this.modeOffre;
    this.findAllBiensImmo(this.modeOffre);
  }
  /**
   * @param modeOffre : False => pour les biens à acheter / True => pour les biens à louer
   */
  findAllBiensImmo(modeOffre : boolean){
    if (modeOffre == false) {
      this.bienService.getAllAchat().subscribe(data => this.biensImmobilier = data);
    } else {
      this.bienService.getAllLocation().subscribe(data => this.biensImmobilier = data);
    }
  }
  findAllConseillers(){

  }
  findAllClients(){

  }
}
