import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrat } from 'src/app/modeles/Contrat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private WS_REST_URL : "http://localhost:8080/gestion-immo/contrats";

  constructor(private httpClient : HttpClient) { }

  /* =============================================================================== */
  /* ========================= CRUD DE la la classe Contrat ======================== */
  /* =============================================================================== */

  addContrat(pContrat : Contrat):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pContrat);
  }

  getAllContrat():Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(`${this.WS_REST_URL}/getall`);
  }

  getContratById(idContrat : number):Observable<Contrat>{
    return this.httpClient.get<Contrat>(`${this.WS_REST_URL}/getById/${idContrat}`);
  }

  updateContrat(pContrat : Contrat):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pContrat}`, pContrat);
   }

  deleteContrat( idContrat : number):Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${idContrat}`)
  }
}
