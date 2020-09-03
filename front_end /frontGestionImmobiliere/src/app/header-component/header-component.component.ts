import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthenticationService } from '';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(/*private loginService:AuthentificationService,*/ private router: Router ) { }

  ngOnInit(): void {
  }

  viewProprietaire(){
    this.router.navigate(["proprietaire_list"]).then(() => window.location.reload() );
  }

  viewClient(){
    this.router.navigate(["client_list"]).then(() => window.location.reload() );
  }

  viewContrat(){
    this.router.navigate(["list/contrat"]).then(() => window.location.reload() );
  }

  viewBiens(){
    this.router.navigate(["bienImmoAchat/list"]).then(() => window.location.reload());
  }
}
