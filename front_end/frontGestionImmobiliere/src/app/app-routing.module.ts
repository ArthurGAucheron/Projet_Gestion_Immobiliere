import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeImmobilierComponent } from "./composants/bienImmobilier/liste-immobilier-achat/liste-immobilier.component";
import { ListeImmobilierLocationComponent } from './composants/bienImmobilier/liste-immobilier-location/liste-immobilier-location.component';
import { FicheImmobilierAchatComponent } from './composants/bienImmobilier/fiche-immobilier-achat/fiche-immobilier-achat.component';
import { CreateImmobilierComponent } from "./composants/bienImmobilier/create-immobilier-achat/create-immobilier.component";

const routes: Routes = [

  // URLs : gestion des CONTRATS
  {path:"contrat/list", component:ListeContratComponent},
  {path:"contrat/edit/:id", component:CreateContratComponent},


  //URLs : gestion des BIENS IMMOBILIER A ACHETER
  {path:"bienImmoAchat/list", component:ListeImmobilierComponent},
  {path:"bienImmoAchat/fiche/:id", component:FicheImmobilierAchatComponent},
  {path:"bienImmoAchat/edit/:id", component:CreateImmobilierComponent},
  

  //URLs : gestion des BIENS IMMOBILIER A LOUER
  {path:"bienImmoLocation/list", component:ListeImmobilierLocationComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
