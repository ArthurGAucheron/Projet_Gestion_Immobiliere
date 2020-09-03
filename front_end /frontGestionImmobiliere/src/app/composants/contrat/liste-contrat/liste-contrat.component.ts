import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
import { Router, ActivatedRoute} from '@angular/router';
import { Contrat } from 'src/app/modeles/Contrat';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {
  
  // ========= Propriétés ==========

  contrats : Contrat[] ;

  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject();

  // ========= Constructeurs ==========

  constructor(private contratService : ContratService, private router : Router) { }

  // ========= Méthodes ==========
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5};

    this.findAllContrat();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  findAllContrat(){
    this.contratService.getAllContrat().subscribe(data => { this.contrats = data;
      this.dtTrigger.next()});
  }
  
  updateContrat(idContrat : number ){
    this.router.navigate([ 'contrat/edit', idContrat])
  }

  deleteContrat(idContrat : number){
    this.contratService.deleteContrat(idContrat).subscribe(() => {this.findAllContrat();});
  }

  newContrat(){
    this.router.navigate(["edit/contrat/0"])
  }

  selectContrat(idContrat : number){
    this.router.navigate(["contrat_card", idContrat])
  }
  
}
