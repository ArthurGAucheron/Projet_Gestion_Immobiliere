import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {

  contrats = [];


  constructor(private contratService : ContratService, private router : Router) { }

  ngOnInit(): void {
    this.findAllContrat();
  }

  findAllContrat(){
    this.contratService.getAllContrat().subscribe(data => this.contrats =data)
  }
  
  editContrat(idContrat : number ){
    this.router.navigate([ 'edit/contrat', idContrat])
  }
}
