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
    dateSoumission : any;
    dateMiseADispo : any;
    revenuCadastral : number;
    descriptif : String;
    classe : ClasseStandard;
    adresse : Adresse;
    proprietaire : Proprietaire;
    contrat : Contrat;
    visites : Array<Visite>;
    listeClients : Array<Client>;


    public constructor (idBien : number,libelle : String, statut : String,
        dateSoumission : any, dateMiseADispo : any, revenuCadastral : number,descriptif : String,
        classe : ClasseStandard,adresse : Adresse, proprietaire : Proprietaire){

            this.idBien = idBien;
            this.libelle = libelle;
            this.statut =statut;
            this.dateSoumission =dateSoumission;
            this.revenuCadastral = revenuCadastral;
            this.descriptif = descriptif;
            this.classe = classe;
            this.adresse = adresse;
            this.proprietaire;
        }
 
}