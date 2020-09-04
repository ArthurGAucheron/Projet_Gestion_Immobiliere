import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { ClasseStandardService } from '../classe-standard/classe-standard.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeAllClasseStandardService implements Resolve<ClasseStandard[]> {

  constructor(private classeStandardService :ClasseStandardService) { }

  resolve():Observable<ClasseStandard[]>{
    return this.classeStandardService.getAllClasseStandard();
  }
}
