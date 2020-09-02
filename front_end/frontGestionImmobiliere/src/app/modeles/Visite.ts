import { Client } from "./Client";
import { ConseillerImmobilier } from "./ConseillerImmobilier";
import { BienImmobilier } from './BienImmobilier';
import { BienAchat } from './BienAchat';
import { BienLocation } from './BienLocation';

export class Visite{
    idVisite: number;
    dateVisite: Date;
    client: Client;
    conseiller: ConseillerImmobilier;
    bienImmobilier : BienLocation | BienAchat;
}