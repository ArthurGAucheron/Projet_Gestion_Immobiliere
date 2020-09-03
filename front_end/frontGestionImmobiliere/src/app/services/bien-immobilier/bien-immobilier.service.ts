import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BienAchat } from "src/app/modeles/BienAchat";
import { Observable } from 'rxjs';
import { BienLocation } from "src/app/modeles/BienLocation";

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierService {

  private WS_REST_URL = "http://localhost:8080/gestion-immo/biens";

  constructor(private httpClient : HttpClient) { }


  /* =============================================================================== */
  /* ========================= CRUD BIEN A ACHETER ================================= */
  /* =============================================================================== */

  addBienAchat(pBienAchat : BienAchat):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pBienAchat);
  }

  getAllAchat():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.WS_REST_URL}/getall`);
  }
 
  getAchatById(idBienAchat : number):Observable<any>{
    return this.httpClient.get<any>(`${this.WS_REST_URL}/get-by-id/${idBienAchat}`);
  }

  updateAchat(pBienAchat : BienAchat):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pBienAchat}`, pBienAchat);
   }

  deleteAchatBien(pIdAchatBien : number):Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${pIdAchatBien}`)
  }
  
  /* =============================================================================== */
  /* ========================= CRUD BIEN A LOUER =================================== */
  /* =============================================================================== */

  addBienLocation(pBienLocation : BienLocation):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pBienLocation)
  }

  getAllLocation():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.WS_REST_URL}/getall`);
  }


  getLocationById(idBienLocation : number):Observable<any>{
    return this.httpClient.get<any>(`${this.WS_REST_URL}/get-by-id/${idBienLocation}`);
  }

  updateLocation(pLocation : BienLocation):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pLocation}`, pLocation);
   }

   deleteLocation(pIdLocation : number):Observable<void>{
     return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${pIdLocation}`)
   }
}
