import { Component, OnInit } from '@angular/core';
import { Visite } from 'src/app/modeles/Visite';
import { VisiteService } from 'src/app/services/visite/visite.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-visite',
  templateUrl: './details-visite.component.html',
  styleUrls: ['./details-visite.component.css']
})
export class DetailsVisiteComponent implements OnInit {

  visite : Visite = {
    idVisite: null,
    dateVisite: null,
    client: null,
    conseiller: null,
    bienImmobilier : null
  }

  constructor(private visiteService : VisiteService,
              private router : Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      this.visiteService.findVisiteByIdFromWsRest(id)
                        .subscribe(toLook=>this.visite=toLook);

    });
  }

  //Redirection
  navigateToUpdateVisite($event : Event,idClasse:number){
    event.preventDefault();
    this.router.navigateByUrl("edit/visite/"+idClasse);
  }

}
