import { Client } from './Client';
import { BienImmobilier } from './BienImmobilier';
import { BienAchat } from './BienAchat';
import { BienLocation } from './BienLocation';

export class ClasseStandard {

    idClasse : number;
    typeBiens : string;
    modeOffre : string;
    prixMax : number;
    superficieMin : number;

    clients : Array<Client>;
    biensImmobilier : Array<any>

}