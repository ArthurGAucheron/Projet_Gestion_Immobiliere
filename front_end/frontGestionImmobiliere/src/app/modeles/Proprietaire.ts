import { Adresse } from "./Adresse";
import { BienImmobilier } from './BienImmobilier';

export class Proprietaire{
    idProprietaire : number;
    nom: string;
    telPrive: string;
    telTravail: string;
    adresse : Adresse;
    biensImmobiliers: Array<BienImmobilier>;
}
