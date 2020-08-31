
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

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
export class AuthentificationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
    console.log("Authenticate : " + username +":"+password);

    return this.httpClient.post<any>('http://localhost:8080/rest/authenticate',
      {username:username,password:password}).subscribe(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     );
}

isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  // console.log("username :" , sessionStorage.getItem('username'));
  // console.log("token :" , sessionStorage.getItem('token'));
  return !(user === null)
}
logOut() {
  sessionStorage.removeItem('username')
}
}