import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Router, ActivatedRoute} from '@angular/router';
import { Contrat } from 'src/app/modeles/Contrat';
@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {
  
  // ========= Propriétés ==========

  contrats : Array<Contrat> = [];


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

  newContrat(){
    this.router.navigate(["edit/contrat/:id", 0])
  }
  
}
