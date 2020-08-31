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
    dateSoummission : null,
    dateMiseADispo : null,
    revenuCadastral : null,
    descriptif : null,
    classeStandard : null,
    visites : null,
    contrat : null,
    montantCaution : null,
    loyerMensuel : null,
    montantMensuelCharges  :null,
    typeBail : null,
    garniture : null,
  }
 
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
    contrat : null,
    prixDemande : null,
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
