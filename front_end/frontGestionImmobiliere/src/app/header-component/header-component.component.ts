import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
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
  
  viewBiens(){
    this.router.navigate(["bienImmoAchat/list"]);
  }
}
