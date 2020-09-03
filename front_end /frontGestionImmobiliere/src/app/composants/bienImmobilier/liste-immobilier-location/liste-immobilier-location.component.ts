import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-immobilier-location',
  templateUrl: './liste-immobilier-location.component.html',
  styleUrls: ['./liste-immobilier-location.component.css']
})
export class ListeImmobilierLocationComponent implements OnInit {

   // ========== Propriétés ============
  biensLocation = [];

  // ========== Constructeurs ============
  constructor(private bienService : BienImmobilierService, private router : Router) { }

  // ========== Méthodes ============
  ngOnInit(): void {
    this.findAllLocation();
  }

  findAllLocation(){

    this.bienService.getAllLocation().subscribe(data => this.biensLocation=data);
  }
}
