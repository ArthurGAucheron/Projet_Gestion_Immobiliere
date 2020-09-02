import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visite } from '../../modeles/Visite';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  /*_______________ props ________________ */
  private WS_REST_BASE_URL = "http://localhost:8080/gestion-immo/visites/getall";

  /*_______________ ctors ________________ */
  /**
   * injection de HttpClient
   */
  constructor(private httpClient : HttpClient) { }

  /*_______________ methodes ________________ */
  getAllClientFromWsRest(): Observable<Visite[]>{
    return this.httpClient.get<Visite[]>(`${this.WS_REST_BASE_URL}/getall`);
  }

  ajouterClientViaWsRest(visite: Visite): Observable<Visite>{
    return this.httpClient.post<Visite>(`${this.WS_REST_BASE_URL}/save`, visite);
  }

  supprimerClientViaWsRest(visite : Visite): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/delete/${visite.idVisite}`);
  }

  findClientByIdFromWsRest(idVisite : number): Observable<Visite>{
    return this.httpClient.get<Visite>(`${this.WS_REST_BASE_URL}/get-by-id/${idVisite}`);
  }

  modifierClientViaWsRest(visite : Visite) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/update/${visite.idVisite}`, visite);
  }
}

