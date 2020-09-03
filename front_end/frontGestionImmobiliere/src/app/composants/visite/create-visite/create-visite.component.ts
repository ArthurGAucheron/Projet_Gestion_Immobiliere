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
    client: new Client,
    conseillers: new ConseillerImmobilier,
    bienImmobilier: null,
  };

  listeClient: Array<Client>;
  listeConseiller:Array<ConseillerImmobilier>;
  listeBien:Array<BienAchat | BienLocation>;

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
      }else{
        this.visite = {
          idVisite: null,
          dateVisite: null,
          client: null,
          conseillers: null,
          bienImmobilier: null,
        };
      }
    });
    this.clientService.getAllClientFromWsRest().subscribe(liste=>this.listeClient=liste);
    this.conseillerService.getAllConseillerFromWsRest().subscribe(liste=>this.listeConseiller=liste);
    this.bienImmoService.getAllAchat().subscribe(liste=>this.listeBien=liste);
  }

  saveOrUpdateVisite(){
    console.log(this.visite)
    if (this.visite.idVisite==null) {
      this.visiteService.ajouterVisiteViaWsRest(this.visite).subscribe();
    } else {
      this.visiteService.modifierVisiteViaWsRest(this.visite).subscribe();
      this.router.navigateByUrl("look/classeStandard/"+this.visite.idVisite);
    }
    this.router.navigateByUrl("list/visite");
    
  }

}
