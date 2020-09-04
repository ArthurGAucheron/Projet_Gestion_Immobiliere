import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../modeles/Client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  /*_______________ props ________________ */
  private WS_REST_BASE_URL = "http://localhost:8080/gestion-immo/clients";

  /*_______________ ctors ________________ */
  /**
   * injection de HttpClient
   */
  constructor(private httpClient : HttpClient) { }

  /*_______________ methodes ________________ */
  getAllClientFromWsRest(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.WS_REST_BASE_URL}/getall`);
  }

  ajouterClientViaWsRest(client: Client): Observable<Client>{
    return this.httpClient.post<Client>(`${this.WS_REST_BASE_URL}/save`, client);
  }

  supprimerClientViaWsRest(client : Client): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/delete/${client.idClient}`);
  }

  findClientByIdFromWsRest(idClient : number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.WS_REST_BASE_URL}/get-by-id/${idClient}`);
  }

  modifierClientViaWsRest(client : Client) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/update/${client.idClient}`, client);
  }

  findClientByIdClasseViaWsRest(idClasse : number) : Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.WS_REST_BASE_URL}/get-by-classe/${idClasse}`);
  }
}
