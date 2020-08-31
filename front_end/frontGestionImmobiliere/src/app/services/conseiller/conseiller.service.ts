import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConseillerImmobilier } from '../../modeles/ConseillerImmobilier';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConseillerService {

  /*_______________ props ________________ */
  private WS_REST_BASE_URL = "http://localhost:8080/";

  /*_______________ ctors ________________ */
  /**
   * injection de HttpClient
   */
  constructor(private httpClient : HttpClient) { }

  /*_______________ methodes ________________ */
  getAllConseillerFromWsRest(): Observable<ConseillerImmobilier[]>{
    return this.httpClient.get<ConseillerImmobilier[]>(`${this.WS_REST_BASE_URL}/getall`);
  }

  ajouterConseillerViaWsRest(conseiller: ConseillerImmobilier): Observable<ConseillerImmobilier>{
    return this.httpClient.post<ConseillerImmobilier>(`${this.WS_REST_BASE_URL}/save`, conseiller);
  }

  supprimerConseillerViaWsRest(conseiller : ConseillerImmobilier): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/delete/${conseiller.idConseiller}`);
  }

  findConseillerByIdFromWsRest(idConseiller : number): Observable<ConseillerImmobilier>{
    return this.httpClient.get<ConseillerImmobilier>(`${this.WS_REST_BASE_URL}/get-by-id/${idConseiller}`);
  }

  modifierConseillerViaWsRest(conseiller : ConseillerImmobilier) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/update/${conseiller.idConseiller}`, conseiller);
  }
}
