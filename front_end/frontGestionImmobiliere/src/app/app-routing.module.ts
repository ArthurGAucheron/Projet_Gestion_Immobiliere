import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeImmobilierComponent } from "./composants/bienImmobilier/liste-immobilier-achat/liste-immobilier.component";
import { ListeImmobilierLocationComponent } from './composants/bienImmobilier/liste-immobilier-location/liste-immobilier-location.component';
import { FicheImmobilierAchatComponent } from './composants/bienImmobilier/fiche-immobilier-achat/fiche-immobilier-achat.component';
import { CreateImmobilierComponent } from "./composants/bienImmobilier/create-immobilier-achat/create-immobilier.component";


import { ClientCardComponent } from './composants/client/client-card/client-card.component';
import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';
import { ClientListComponent } from './composants/client/client-list/client-list.component';
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { AuthGuardService } from './guards/auth-guard.service';



const routes: Routes = [

   //URLs : gestion des CONTRATS
  {path:"edit/contrat/:id", component:CreateContratComponent},
  {path:"contrat/list", component:ListeContratComponent},
  {path:"contrat/edit/:id", component:CreateContratComponent},

  //URLs : gestion des CLIENTS
  {path:"client_card/:id", component:ClientCardComponent},
  {path:"client_edit/:id", component:ClientCreateComponent},
  {path:"client_list", component:ClientListComponent},

  //URLs : gestion des BIENS IMMOBILIER A ACHETER
  {path:"bienImmoAchat/list", component:ListeImmobilierComponent},
  {path:"bienImmoAchat/fiche/:id", component:FicheImmobilierAchatComponent},
  {path:"bienImmoAchat/edit/:id", component:CreateImmobilierComponent},
  

  //URLs : gestion des BIENS IMMOBILIER A LOUER
  {path:"bienImmoLocation/list", component:ListeImmobilierLocationComponent},
  
  //URLs : gestion DES PROPRIETAIRES 
  {path:"proprietaire_card/:id", component:ProprietaireCardComponent},
  {path:"proprietaire_edit/:id", component:ProprietaireCreateComponent},
  {path:"proprietaire_list", component:ProprietaireListComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
