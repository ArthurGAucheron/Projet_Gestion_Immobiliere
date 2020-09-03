import { Component, OnInit } from '@angular/core';
import { Proprietaire } from 'src/app/modeles/Proprietaire';
import { ProprietaireService } from 'src/app/services/propietaire/proprietaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Adresse } from 'src/app/modeles/Adresse';

@Component({
  selector: 'app-proprietaire-create',
  templateUrl: './proprietaire-create.component.html',
  styleUrls: ['./proprietaire-create.component.css']
})
export class ProprietaireCreateComponent implements OnInit {

  /*_____________ props ______________ */
  proprietaire : Proprietaire = {
    idProprietaire : null,
    nom: null,
    telPrive: null,
    telTravail: null,
    adresse : new Adresse,
    biensImmobiliers: null
  }

  /*_____________ ctors ______________ */
  constructor(private proprietaireService : ProprietaireService, private router : Router, 
              private activatedRoute : ActivatedRoute) {  }

  /*_____________ methodes ______________ */
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
        proprietaireToUpdate => this.proprietaire = proprietaireToUpdate
      );
    }
  }

  /**
   * permet d'enregistrer la modification d'un proprietaire ou un nouveau propriétaire.
   */
  saveOrUpdateProprietaire(){
    if (this.proprietaire.idProprietaire == null) {
      //ajout d'un nouveau propriétaire
      this.proprietaireService.ajouterProprietaireViaWsRest(this.proprietaire).subscribe();
    } else {
      //modification d'un proprietaire
      this.proprietaireService.modifierProprietaireViaWsRest(this.proprietaire).subscribe();
    }

    //redirection
    this.router.navigate(["proprietaire_list"]).then(()=>window.location.reload());
    
  }


}
