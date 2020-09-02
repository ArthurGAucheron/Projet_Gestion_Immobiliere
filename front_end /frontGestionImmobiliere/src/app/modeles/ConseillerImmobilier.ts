import { Visite } from "./Visite";
import { Contrat } from './Contrat';

export class ConseillerImmobilier{
    idConseiller: number;
    identifiant: string;
    motDePasse: string;
    nom: string;
    telephone: string;
    listeVisites: Array<Visite>;
    listeContrat: Array<Contrat>;
}