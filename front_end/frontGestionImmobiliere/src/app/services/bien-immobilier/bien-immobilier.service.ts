import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BienAchat } from "src/app/modeles/BienAchat";
import { Observable } from 'rxjs';
import { BienLocation } from "src/app/modeles/BienLocation";
import { BienImmobilier } from 'src/app/modeles/BienImmobilier';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierService {

  private WS_REST_URL = "http://localhost:8080/gestion-immo/biens";

  constructor(private httpClient : HttpClient) { }

  getAllBienByConseiller(pIdConseiller : number):Observable<BienImmobilier[]>{
    return this.httpClient.get<BienImmobilier[]>(`${this.WS_REST_URL}/get-by-idConseiller/${pIdConseiller}`);
  }

  /* =============================================================================== */
  /* ========================= CRUD BIEN A ACHETER ================================= */
  /* =============================================================================== */

  addBienAchat(pBienAchat : BienAchat):Observable<void>{
    return this.httpClient.post<void>(`${this.WS_REST_URL}/save`, pBienAchat);
  }

  getAllAchat():Observable<BienAchat[]>{
    return this.httpClient.get<BienAchat[]>(`${this.WS_REST_URL}/getAll`);
  }

  getAchatById(idBienAchat : number):Observable<BienAchat>{
    return this.httpClient.get<BienAchat>(`${this.WS_REST_URL}/getById/${idBienAchat}`);
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

  getAllLocation():Observable<BienLocation[]>{
    return this.httpClient.get<BienLocation[]>(`${this.WS_REST_URL}/getAll`);
  }


  getLocationById(idBienLocation : number):Observable<BienLocation>{
    return this.httpClient.get<BienLocation>(`${this.WS_REST_URL}/getById/${idBienLocation}`);
  }

  updateLocation(pLocation : BienLocation):Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_URL}/update/${pLocation}`, pLocation);
   }

   deleteLocation(pIdLocation : number):Observable<void>{
     return this.httpClient.delete<void>(`${this.WS_REST_URL}/delete/${pIdLocation}`)
   }
}
