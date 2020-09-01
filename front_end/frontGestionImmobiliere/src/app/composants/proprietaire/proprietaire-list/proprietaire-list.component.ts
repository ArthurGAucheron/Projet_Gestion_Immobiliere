import { Component, OnInit } from '@angular/core';
import { ProprietaireService } from 'src/app/services/propietaire/proprietaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietaire-list',
  templateUrl: './proprietaire-list.component.html',
  styleUrls: ['./proprietaire-list.component.css']
})
export class ProprietaireListComponent implements OnInit {

  /*____________ props ___________ */
  proprietaire = [];

  /*____________ ctor ___________ */
  constructor(private proprietaireService : ProprietaireService, private router: Router) { }

  ngOnInit(): void {
    this.findAllProprietaire();
  }

  findAllProprietaire(){
    this.proprietaireService.getAllProprietaireFromWsRest().subscribe(data => this.proprietaire = data)
  }

  selectProprietaire(idProprietaire: number){
    this.router.navigate(["proprietaire_card", idProprietaire])
  }

  

}
