import { Client } from './Client';
import { BienImmobilier } from './BienImmobilier';

export class ClasseStandard {

    idClasse : number;
    typeBiens : string;
    modeOffre : string;
    prixMax : number;
    superficieMin : number;

    clients : Array<Client>;
    biensImmobilier : Array<BienImmobilier>

}