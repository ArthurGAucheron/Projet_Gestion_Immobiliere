import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/modeles/Contrat';
import { ContratService } from 'src/app/services/contrat/contrat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/modeles/Client';

@Component({
  selector: 'app-details-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {

  contrats : Contrat;
  client : Client;

  constructor(private contratService: ContratService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //recup du param id de l'url
    this.activatedRoute.paramMap.subscribe(params => 
      { const id = +params.get("id");
      this.findContratById(id);
    });
  }


  /**
   * Permet de recuperer le contrat via son id
   * @param id : id du contrat à recuperer
   */
  findContratById(id: number) {
    this.contratService.getContratById(id).subscribe(
      data => this.contrats = data
    );
  }


}
