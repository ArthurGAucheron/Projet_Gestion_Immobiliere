export class Adresse{
    idAdresse: number;
    numero: string;
    rue: string;
    codePostal : number;
    localite : string;
    pays: string;

    /*________ methodes ________ */
    public toString(): string{
        return this.idAdresse.toString+", "+this.rue+"\n"+this.codePostal+" "+this.localite+"\n"+this.pays;
    }
}