import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixClasseStandard'
})
export class PipeClasseStandardPipe implements PipeTransform {

  transform(prix: number, modeOffre : string): string {
    
    if (modeOffre=="Location") {
      return prix+" € / mois"
    } else {
      return prix + "€"
    }
  }

}
