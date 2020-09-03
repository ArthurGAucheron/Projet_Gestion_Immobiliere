import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from 'src/app/modeles/Client';
import { ClientService } from 'src/app/services/client/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  /*____________ props ___________ */
  clients = [];
  dtTrigger: Subject<any> = new Subject();

  /*____________ ctor ___________ */
  constructor(private clientService : ClientService, private router: Router) { }

  /*____________ methodes ___________ */
  ngOnInit(): void {
    this.findAllClients();
  }

  /**
   * permet de recuperer tout les clients via le service
   */
  findAllClients(){
    this.clientService.getAllClientFromWsRest().subscribe(
      data => {this.clients = data;
               this.dtTrigger.next();
      })
  }

  /**
   * permet de naviguer vers la fiche d'un client
   * @param idClient id du client selectionné
   */
  selectClient(idClient: number){
    this.router.navigate(["client_card", idClient])
  }

  newClient(){
    this.router.navigate(["client_edit", 0])
  }

}
