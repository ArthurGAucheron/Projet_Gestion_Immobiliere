import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modeles/Client';
import { ClientService } from 'src/app/services/client/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  /*_____________ props ______________ */
  client : Client = {
    idClient : null,
    nom: null,
    telephone: null,
    adresse : null,
    listeVisites : null,
    listeContrat : null
  }

  /*_____________ ctors ______________ */
  constructor(private clientService : ClientService, private router: Router, private activatedRoute : ActivatedRoute) { }

  /*_____________ methodes ______________ */
  ngOnInit(): void {
    //recup du param id de l'url
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.findClientById(id);
    });
  }

  /**
   * permet de recup un client via son id si id different de 0. Sinon client vide.
   * @param id du client
   */
  findClientById(id: number){
    if (id != 0){
      this.clientService.findClientByIdFromWsRest(id).subscribe(
        clientToUpdate => this.client = clientToUpdate
      );
    }
  }

  /**
   * permet d'enregistrer la modification d'un client ou un nouveau client.
   */
  saveOrUpdateClient(){
    if (this.client.idClient == null) {
      //ajout d'un nouveau propriétaire
      this.clientService.ajouterClientViaWsRest(this.client).subscribe();
    } else {
      //modification d'un proprietaire
      this.clientService.modifierClientViaWsRest(this.client).subscribe();
    }
    //redirection
    this.router.navigate(["client_list"]);
  }

}
