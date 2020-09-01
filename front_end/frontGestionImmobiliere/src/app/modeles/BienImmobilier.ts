import { ClasseStandard } from "./ClasseStandard";
import { Visite } from "./Visite";
import { Contrat } from "./Contrat";

export class BienImmobilier{

    idBien : number;
    libelle : String;
    statut : String;
    dateSoummission : any;
    dateMiseADispo : any;
    revenuCadastral : number;
    descriptif : String;
    classeStandard : ClasseStandard;
    visites : Visite[];
    contrat : Contrat;

    /*
    proprietaire : proprietaire;
    adresse : adresse;
    clients : client[];
    */



}