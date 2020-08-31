import { Adresse } from "./Adresse";
import { Visite } from "./Visite";

export class Client{
    idClient : number;
    nom: string;
    telephone: string;
    adresse : Adresse;
    listeVisites : Array<Visite>;
    //listeContrat : Array<Contrat>;
}