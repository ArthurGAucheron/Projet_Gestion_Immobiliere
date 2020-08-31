import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proprietaire } from '../../modeles/Proprietaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {

  /*_______________ props ________________ */
  private WS_REST_BASE_URL = "http://localhost:8080/";

  /*_______________ ctors ________________ */
  /**
   * injection de HttpClient
   */
  constructor(private httpClient : HttpClient) { }

  /*_______________ methodes ________________ */
  getAllProprietaireFromWsRest(): Observable<Proprietaire[]>{
    return this.httpClient.get<Proprietaire[]>(`${this.WS_REST_BASE_URL}/getall`);
  }

  ajouterProprietaireViaWsRest(proprietaire: Proprietaire): Observable<Proprietaire>{
    return this.httpClient.post<Proprietaire>(`${this.WS_REST_BASE_URL}/save`, proprietaire);
  }

  supprimerProprietaireViaWsRest(proprietaire : Proprietaire): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/delete/${proprietaire.idProprietaire}`);
  }

  findProprietaireByIdFromWsRest(idProprietaire : number): Observable<Proprietaire>{
    return this.httpClient.get<Proprietaire>(`${this.WS_REST_BASE_URL}/get-by-id/${idProprietaire}`);
  }

  modifierProprietaireViaWsRest(proprietaire : Proprietaire) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/update/${proprietaire.idProprietaire}`, proprietaire);
  }
}
