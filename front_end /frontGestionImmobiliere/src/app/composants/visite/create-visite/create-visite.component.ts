import { Component, OnInit } from '@angular/core';

import { VisiteService} from "src/app/services/visite/visite.service";
import { Visite } from 'src/app/modeles/Visite';
import { Client } from 'src/app/modeles/Client';
import { ConseillerImmobilier } from 'src/app/modeles/ConseillerImmobilier';
import { BienImmobilier } from 'src/app/modeles/BienImmobilier';
import { Router, ActivatedRoute } from '@angular/router';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { ClientService } from 'src/app/services/client/client.service';
import { ConseillerService } from 'src/app/services/conseiller/conseiller.service';
import { BienAchat } from 'src/app/modeles/BienAchat';
import { BienLocation } from 'src/app/modeles/BienLocation';

@Component({
  selector: 'app-create-visite',
  templateUrl: './create-visite.component.html',
  styleUrls: ['./create-visite.component.css']
})
export class CreateVisiteComponent implements OnInit {

  visite: Visite = {
    idVisite: null,
    dateVisite: null,
    client: null,
    conseillers: null,
    bienImmobilier: null,
  };

  listeClient: Array<Client>;
  listeConseiller:Array<ConseillerImmobilier>;
  listeBienAchat:Array<BienAchat>;
  listeBienLocation:Array<BienLocation>;

  constructor(private visiteService:VisiteService,
              private conseillerService:ConseillerService,
              private clientService:ClientService,
              private bienImmoService:BienImmobilierService,
              private router : Router,
              private activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      if (id!=0) {
        this.visiteService.findVisiteByIdFromWsRest(id).subscribe(toUpdate =>this.visite=toUpdate);
      }
    });
    this.clientService.getAllClientFromWsRest().subscribe(liste=>this.listeClient=liste);
    this.conseillerService.getAllConseillerFromWsRest().subscribe(liste=>this.listeConseiller=liste);
    this.bienImmoService.getAllAchat().subscribe(liste=>this.listeBienAchat=liste);
    this.bienImmoService.getAllLocation().subscribe(liste=>this.listeBienLocation=liste);
  }

  saveOrUpdateVisite(){
    if (this.visite.idVisite==null) {
      this.visiteService.ajouterVisiteViaWsRest(this.visite).subscribe();
    } else {
      this.visiteService.modifierVisiteViaWsRest(this.visite).subscribe();
      this.router.navigateByUrl("look/classeStandard/"+this.visite.idVisite);
    }
    this.router.navigateByUrl("list/visite/");
    
  }

}
