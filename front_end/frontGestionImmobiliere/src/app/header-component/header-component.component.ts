import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(public loginService:AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  viewProprietaire(){
    this.router.navigate(["proprietaire_list"])
  }

  viewClient(){
    this.router.navigate(["client_list"])
  }

}
