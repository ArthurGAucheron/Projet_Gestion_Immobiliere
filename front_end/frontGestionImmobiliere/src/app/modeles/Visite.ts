import { Client } from "./Client";
import { ConseillerImmobilier } from "./ConseillerImmobilier";

export class Visite{
    idVisite: number;
    dateVisite: Date;
    client: Client;
    conseiller: ConseillerImmobilier;
    //bienImmobilier : BienImmobilier;
}