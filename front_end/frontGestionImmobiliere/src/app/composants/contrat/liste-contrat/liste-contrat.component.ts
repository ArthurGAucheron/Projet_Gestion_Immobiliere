import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {
  
  // ========= Propriétés ==========

  contrats = [];


  // ========= Constructeurs ==========

  constructor(private contratService : ContratService, private router : Router) { }

  // ========= Méthodes ==========
  
  ngOnInit(): void {
    this.findAllContrat();
  }

  findAllContrat(){
    this.contratService.getAllContrat().subscribe(data => this.contrats =data)
  }
  
  updateContrat(idContrat : number ){
    this.router.navigate([ 'contrat/edit', idContrat])
  }

  deleteContrat(idContrat : number){
    this.contratService.deleteContrat(idContrat).subscribe(() => {this.findAllContrat();});
  }
}
