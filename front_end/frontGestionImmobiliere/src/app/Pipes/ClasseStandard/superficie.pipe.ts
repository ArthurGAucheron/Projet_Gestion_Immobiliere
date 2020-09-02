import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'superficie'
})
export class SuperficiePipe implements PipeTransform {

  transform(superficie: number, typeBiens:string): string {
    console.log(typeBiens);
    if (typeBiens=="Terrain") {
      return superficie+" ares"
    } else {
      return superficie + " m²"
    }
  }

}
