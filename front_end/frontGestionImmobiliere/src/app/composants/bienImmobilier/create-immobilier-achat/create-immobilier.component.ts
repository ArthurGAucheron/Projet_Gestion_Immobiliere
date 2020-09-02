import { Component, OnInit } from '@angular/core';
import { BienLocation } from 'src/app/modeles/BienLocation';
import { BienAchat } from 'src/app/modeles/BienAchat';

@Component({
  selector: 'app-create-immobilier',
  templateUrl: './create-immobilier.component.html',
  styleUrls: ['./create-immobilier.component.css']
})
export class CreateImmobilierComponent implements OnInit {
  // =========== Propriétés ===========
  bienAchat : BienAchat = {
    idBien : null,
    libelle : null,
    statut : null,
    dateSoummission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
    classeStandard : null,
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    prixDemande : null,
    etat : null,
  }

  listeClasse = [];
  listeProprietaire = [];

  // =========== Constructeurs ===========
  constructor() { }

  // =========== Méthoides ===========
  ngOnInit(): void {
  }
  saveOrUpdateBien(){

  }


}