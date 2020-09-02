import { Client } from "./Client";
import { ConseillerImmobilier } from "./ConseillerImmobilier";
import { BienImmobilier } from './BienImmobilier';

export class Visite{
    idVisite: number;
    dateVisite: Date;
    client: Client;
    conseiller: ConseillerImmobilier;
    bienImmobilier : BienImmobilier;
}