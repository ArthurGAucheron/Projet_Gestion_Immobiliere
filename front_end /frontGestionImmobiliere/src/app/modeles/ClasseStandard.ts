import { Client } from './Client';
import { BienImmobilier } from './BienImmobilier';

export class ClasseStandard {

    idClasse : number;
    typeBiens : string;
    modeOffre : string;
    prixMax : number;
    superficieMin : number;

    listeClients : Array<Client>;
    listeBienImmobilier : Array<BienImmobilier>

}