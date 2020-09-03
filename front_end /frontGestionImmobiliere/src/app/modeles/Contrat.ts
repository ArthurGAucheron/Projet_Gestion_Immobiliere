import { BienImmobilier } from './BienImmobilier';
import { ConseillerImmobilier } from './ConseillerImmobilier';
import { Client } from './Client';

export class Contrat {
    idContrat : Number;
    prixAcquisition : Number;
    dateAcquisition : any;
    bienImmobilier : BienImmobilier;
    conseillers : ConseillerImmobilier;
    client : Client;

}