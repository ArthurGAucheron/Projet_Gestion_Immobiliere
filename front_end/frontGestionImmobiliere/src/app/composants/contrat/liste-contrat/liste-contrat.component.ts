import { Component, OnInit } from '@angular/core';
import { ContratService } from "src/app/services/contrat/contrat.service";
@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {

  constructor(private contratService : ContratService) { }

  ngOnInit(): void {
  }

}
