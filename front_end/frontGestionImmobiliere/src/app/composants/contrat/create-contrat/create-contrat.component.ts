import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Contrat } from 'src/app/modeles/Contrat';

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  constructor(private contratService : ContratService) { }

  contrat : Contrat = {
    idContrat : null,
    prixAcquisition : null,
    dateAcquisition : null,
    bienImmobilier :  null,
    conseiller :  null,
    client :  null
  }

  ngOnInit(): void {
  }

  saveContrat(){

    this.contratService.addContrat(this.contrat).subscribe();
  }
}
