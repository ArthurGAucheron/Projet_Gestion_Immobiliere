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
    this.router.navigate(["proprietaire_list"])
  }

  viewClient(){
    this.router.navigate(["client_list"])
  }

  viewVisite(event:Event){
    event.preventDefault();
    this.router.navigate(["list/visite"]).then(() => window.location.reload() );
  }

  viewClasseStandard(event:Event){
    event.preventDefault();
    this.router.navigate(["list","classeStandard"]).then(() => window.location.reload() );
  }
  
}
