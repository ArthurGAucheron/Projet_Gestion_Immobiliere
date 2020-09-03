import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResolveEnd, Router } from '@angular/router';
import { ConseillerImmobilier } from '../modeles/ConseillerImmobilier';
 
export class User{
  constructor(
    public status:string,
     ) {}
  
}
 
export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}
 
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'mon-entete-personnalise':'maValeur'
    })
  };
  
  
  constructor(private httpClient:HttpClient,
    private router: Router) { }
 
  authenticate(username, password) {
    if(!username || !password){
      this.router.navigate(['public/login']);
    }
 
    this.httpClient.post<any>('http://localhost:8080/rest/authenticate',
      {username:username, password:password}, this.optionRequete).subscribe(
       userData => {

        // setup sesssion
          sessionStorage.setItem('username',username);
          let tokenStr = userData.token;
          sessionStorage.setItem('token', tokenStr);
          let role = userData.role;
          sessionStorage.setItem('role', role);
        // redirect on home page
          this.redirectOnSuccess( username );

       }, err => {
         this.redirectBadCredentials();
       }
    );
  }

  redirectBadCredentials(){
    
    this.router.navigate(['public/login']);
  }

  redirectOnSuccess(username: String){
    
    this.router.navigate(['public/accueil']);
  }

 
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user === null)
  }

  isUserClient(): boolean{
    return sessionStorage.getItem('role') === "ROLE_CLIENT";
  }

  isUserAdmin(): boolean{
    return sessionStorage.getItem('role') === "ROLE_ADMIN";
  }
 
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.setItem('role', "ROLE_PUBLIC");
  }



  registerAdmin(cons: ConseillerImmobilier){
    return this.httpClient.post<any>('http://localhost:8080/rest/registerAdmin', cons);
  }

  getUserName(): String {
    return sessionStorage.getItem('username') === null ? "Unknown" : sessionStorage.getItem('username');
  }

  getUserRole(): String {
    return sessionStorage.getItem('role') === null ? "Unknown" : sessionStorage.getItem('role').split('ROLE_')[1];
  }
}
