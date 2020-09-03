import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modeles/Client';
import { ClientService } from 'src/app/services/client/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  /*____________ props ___________ */
  client: Client;

  /*____________ ctor ___________ */
  constructor(private clientService : ClientService, private router: Router,
              private activatedRoute : ActivatedRoute) { }

  /*____________ methodes ___________ */
  ngOnInit(): void {
    //recup du param id de l'url
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.findClientById(id);
    });
  }

  /**
   * Permet de recuperer le client via son id
   * @param id : id du propriétaire à recuperer
   */
  findClientById(id: number){
      this.clientService.findClientByIdFromWsRest(id).subscribe(
        data => this.client = data
      );
  }

  /**
   * permet de naviguer vers la page de modifiaction du client
   * @param idClient id du propriétaire à modifier
   */
  editClient(idClient: number){
    this.router.navigate(["client_edit", idClient])
  }

  /**
   * permet de supprimer un client de la bdd
   * @param client le client à supprimer
   */
  deleteClient(client : Client){
    this.clientService.supprimerClientViaWsRest(client).subscribe();
    this.router.navigate(["client_list"])
  }

  selectContrat(idContrat : number){
    this.router.navigate(["contrat_card", idContrat])
  }

  navigateToDetailsVisite(event : Event, idVisite : number){
    event.preventDefault();
    this.router.navigateByUrl("look/visite/"+idVisite);
  }

}
