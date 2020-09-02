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
   * Permet de recuperer le propriétaire via son id.
   * @param id : id du propriétaire à recuperer
   */
  findProprietaireById(id : number){
      this.proprietaireService.findProprietaireByIdFromWsRest(id).subscribe(
        data => this.proprietaire = data
      );
  }

  /**
   * permet de naviguer vers la page de modifiaction du propriétaire
   * @param idProprietaire id du propriétaire à modifier
   */
  editProprietaire(idProprietaire: number){
    this.router.navigate(["proprietaire_edit", idProprietaire])
  }

  /**
   * permet de supprimer un proprietaire de la bdd
   * @param proprietaire le proprietaire à supprimer
   */
  deleteProprietaire(proprietaire : Proprietaire){
    this.proprietaireService.supprimerProprietaireViaWsRest(proprietaire).subscribe();
    this.router.navigate(["proprietaire_list"])
  }

}
