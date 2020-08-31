import { Visite } from "./Visite";

export class ConseillerImmobilier{
    idConseiller: number;
    identifiant: string;
    motDePasse: string;
    nom: string;
    telephone: string;
    listeVisites: Array<Visite>;
    //listeContrat: Array<Contrat>;
}