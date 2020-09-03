import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProprietaireService } from 'src/app/services/propietaire/proprietaire.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-proprietaire-list',
  templateUrl: './proprietaire-list.component.html',
  styleUrls: ['./proprietaire-list.component.css']
})
export class ProprietaireListComponent implements OnInit {

  /*____________ props ___________ */
  proprietaires = [];
  dtTrigger: Subject<any> = new Subject();

  /*____________ ctor ___________ */
  constructor(private proprietaireService : ProprietaireService, private router: Router) { }

  ngOnInit(): void {
    this.findAllProprietaire();
  }

  ngOnDestroy() : void{
    this.dtTrigger.unsubscribe();
  }

  /**
   * permet de recuperer tous les propriétaire via le service
   */
  findAllProprietaire(){
    this.proprietaireService.getAllProprietaireFromWsRest().subscribe(
      data => {this.proprietaires = data;
               this.dtTrigger.next();
      },
      error => {console.log(error)})
  }

  /**
   * permet de naviguer vers la fiche d'un proprietaire
   * @param idProprietaire id du proprietaire selectionné
   */
  selectProprietaire(idProprietaire: number){
    this.router.navigate(["proprietaire_card", idProprietaire])
  }

  newProprietaire(){
    this.router.navigate(["proprietaire_edit", 0])
  }
  

}
