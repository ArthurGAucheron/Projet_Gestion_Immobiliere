import { Component, OnInit } from '@angular/core';
import { BienLocation } from 'src/app/modeles/BienLocation';
import { BienAchat } from 'src/app/modeles/BienAchat';

@Component({
  selector: 'app-create-immobilier',
  templateUrl: './create-immobilier.component.html',
  styleUrls: ['./create-immobilier.component.css']
})
export class CreateImmobilierComponent implements OnInit {

  bienLocation : BienLocation = {
    idBien : null,
    libelle : null,
    statut : null,
    dateSoumission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
   /* photo : null,*/
   /* classeStandard : null,*/
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    montantCaution : null,
    loyerMensuel :null,
    montantMensuelCharges : null,
    typeBail : null,
    garniture : null,
  }
 
  bienAchat : BienAchat = {
    idBien : null,
    libelle : null,
    statut : null,
    dateSoumission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
  /* photo : null,*/
  /* classeStandard : null,*/
    visites : null,
    contrat :null,
    proprietaire :null,
    adresse : null,
    listeClients : null,
    /*prixDemande : null,*/
    etat : null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  /* =============================================================================== */
  /* ============= METHODES POUR LES BIENS A ACHETER =============================== */
  /* =============================================================================== */
 


  /* =============================================================================== */
  /* ================= METHODES POUR LES LOCATIONS ================================= */
  /* =============================================================================== */

}
