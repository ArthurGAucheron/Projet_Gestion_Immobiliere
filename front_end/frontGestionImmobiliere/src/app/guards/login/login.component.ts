import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  invalidLogin = false
  username: String = '';
  password: String = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
 
  ngOnInit() {
  }
 
  doLogin() {
    this.loginservice.authenticate(this.username, this.password);
  }
 
 
}
