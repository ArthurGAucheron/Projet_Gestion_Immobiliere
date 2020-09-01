import { Component, OnInit } from '@angular/core';
import { Proprietaire } from 'src/app/modeles/Proprietaire';
import { ProprietaireService } from 'src/app/services/propietaire/proprietaire.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proprietaire-card',
  templateUrl: './proprietaire-card.component.html',
  styleUrls: ['./proprietaire-card.component.css']
})
export class ProprietaireCardComponent implements OnInit {

  /*____________ props ___________ */
  proprietaire: Proprietaire;

  /*____________ ctor ___________ */
  constructor(private proprietaireService : ProprietaireService, private router: Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //recup du param id de l'url
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.findProprietaireById(id);
    });
  }

  /**
   * Permet de recuperer le propriétaire à modifier si id different de 0. Sinon ajout.
   * @param id : id du propriétaire à recuperer
   */
  findProprietaireById(id : number){
    if (id != 0){
      this.proprietaireService.findProprietaireByIdFromWsRest(id).subscribe(
        data => this.proprietaire = data
      );
    }
  }

  editProprietaire(idProprietaire: number){
    this.router.navigate(["proprietaire_edit", idProprietaire])
  }

  deleteProprietaire(proprietaire : Proprietaire){
    this.proprietaireService.supprimerProprietaireViaWsRest(proprietaire).subscribe();
    this.router.navigate(["proprietaire_list"])
  }

}
