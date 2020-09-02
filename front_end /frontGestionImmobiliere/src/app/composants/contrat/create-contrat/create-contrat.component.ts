import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Contrat } from 'src/app/modeles/Contrat';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  // ========= Propriétés ==========
  contrat : Contrat = {
    idContrat : null,
    prixAcquisition : null,
    dateAcquisition : null,
    bienImmobilier : null,
    conseillers : null,
    client : null
  }
  // ========= Constructeurs ==========
  constructor(private contratService : ContratService, private router: Router, private activatedRoute :ActivatedRoute) {}

  // ========= Méthodes ==========
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramsMap) => {
      const idContrat = +paramsMap.get("id");
    })
  }

  findContratById(pIdContrat : number){
    
    if (pIdContrat==0) {
      this.contrat={ idContrat : null,prixAcquisition : null,dateAcquisition : null, bienImmobilier : null,conseillers : null,client : null,}
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
}
