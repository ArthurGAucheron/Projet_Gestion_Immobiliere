import { Injectable } from '@angular/core';
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasseStandardService {

  private WS_REST_URL="http://localhost:8080/gestion-immo/classes";

  constructor(private httpClient : HttpClient) { }


  /* =============================================================================== */
  /* ========================= CRUD DE Classe Strandard ============================ */
  /* =============================================================================== */

  addClasseStandard(pClasseStandard : ClasseStandard):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pClasseStandard);
  }

  getAllClasseStandard():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.WS_REST_URL}/getall`);
  }

  getClasseStandardById(idClasseStandard : number):Observable<ClasseStandard>{
    return this.httpClient.get<ClasseStandard>(`${this.WS_REST_URL}/getById/${idClasseStandard}`);
  }

  updateClasseStandard(pClasseStandard : ClasseStandard):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pClasseStandard}`, pClasseStandard);
   }

  deleteClasseStandard( idClasseStandard : number):Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${idClasseStandard}`)
  }
}
