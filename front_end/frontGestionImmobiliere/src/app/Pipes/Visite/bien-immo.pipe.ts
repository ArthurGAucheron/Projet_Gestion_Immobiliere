import { Pipe, PipeTransform } from '@angular/core';
import { BienLocation } from 'src/app/modeles/BienLocation';
import { BienAchat } from 'src/app/modeles/BienAchat';

@Pipe({
  name: 'bienImmo'
})
export class BienImmoPipe implements PipeTransform {

  transform(bienImmo : string, bienClass: BienLocation|BienAchat): unknown {
    if (bienClass instanceof BienLocation ) {
      return bienImmo+" (location)"
    } else {
      return bienImmo+" (achat)"
    }
  }

}
