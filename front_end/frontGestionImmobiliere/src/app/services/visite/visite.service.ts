import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visite } from 'src/app/modeles/Visite';


@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private WS_REST_URL;

  constructor(private httpClient : HttpClient) { }

  /* =============================================================================== */
  /* ========================= CRUD DE la la classe Visite ======================== */
  /* =============================================================================== */

  addVisite(pVisite : Visite):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pVisite);
  }

  getAllVisites():Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(`${this.WS_REST_URL}/getAll`);
  }

  getVisiteById(idVisite : number):Observable<Visite>{
    return this.httpClient.get<Visite>(`${this.WS_REST_URL}/getById/${idVisite}`);
  }

  updateVisite(pVisite : Visite):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pVisite}`, pVisite);
   }

  deleteVisite( idVisite : number):Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${idVisite}`)
  }
}

