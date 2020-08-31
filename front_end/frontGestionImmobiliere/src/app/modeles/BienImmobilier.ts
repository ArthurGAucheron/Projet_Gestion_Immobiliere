import { ClasseStandard } from "./ClasseStandard";
import { Visite } from "./Visite";
import { Contrat } from "./Contrat";
import { Proprietaire } from "./Proprietaire";
import { Adresse } from './Adresse';
import { Client } from './Client';

export class BienImmobilier{

    idBien : number;
    libelle : String;
    statut : String;
    dateSoummission : any;
    dateMiseADispo : any;
    revenuCadastral : number;
    descriptif : String;
    classeStandard : ClasseStandard;
    listeVisite : Array<Visite>;
    contrat : Contrat;
    proprietaire : Proprietaire;
    adresse : Adresse;
    listeClients : Array<Client>;
 
}