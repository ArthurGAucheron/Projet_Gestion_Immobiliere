import { Component, OnInit } from '@angular/core';

import { VisiteService} from "src/app/services/visite/visite.service";
import { Visite } from 'src/app/modeles/Visite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-visite',
  templateUrl: './liste-visite.component.html',
  styleUrls: ['./liste-visite.component.css']
})
export class ListeVisiteComponent implements OnInit {

  constructor(private visiteService:VisiteService, private router : Router) { }

  listeVisite : Array<Visite>;


  ngOnInit(): void {
  }

  navigateToAddVisite(event: Event){
    event.preventDefault();
    this.router.navigateByUrl("edit/visite/0");
  }

  navigateToDetailsVisite(event : Event, idVisite : number){
    event.preventDefault();
    this.router.navigateByUrl("look/visite/"+idVisite);
  }
  
  deleteVisite(event : Event, visite : Visite){
    event.preventDefault();
    this.visiteService.supprimerVisiteViaWsRest(visite).subscribe();
  }

}
