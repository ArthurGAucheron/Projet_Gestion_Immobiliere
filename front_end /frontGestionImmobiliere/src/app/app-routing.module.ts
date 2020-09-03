import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeImmobilierComponent } from "./composants/bienImmobilier/liste-immobilier-achat/liste-immobilier.component";
import { ListeImmobilierLocationComponent } from './composants/bienImmobilier/liste-immobilier-location/liste-immobilier-location.component';
import { FicheImmobilierAchatComponent } from './composants/bienImmobilier/fiche-immobilier-achat/fiche-immobilier-achat.component';
import { CreateImmobilierComponent } from "./composants/bienImmobilier/create-immobilier-achat/create-immobilier.component";


import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { ListeClasseStandardComponent } from './composants/classeStandard/liste-classe-standard/liste-classe-standard.component';
import { DetailsClasseStandardComponent } from './composants/classeStandard/details-classe-standard/details-classe-standard/details-classe-standard.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { ClientCardComponent } from './composants/client/client-card/client-card.component';
import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';
import { ClientListComponent } from './composants/client/client-list/client-list.component';
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { FicheImmobilierLocationComponent } from './composants/bienImmobilier/fiche-immobilier-location/fiche-immobilier-location.component';
import { CreateImmobilierLocationComponent } from './composants/bienImmobilier/create-immobilier-location/create-immobilier-location.component';



const routes: Routes = [

   //URLs : gestion des CONTRATS


  {path:"list/contrat", component:ListeContratComponent},
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
  {path:"bienImmoLocation/fiche/:id", component:FicheImmobilierLocationComponent},
  {path:"bienImmoLocation/edit/:id", component:CreateImmobilierLocationComponent},
  
  //URLs : gestion DES PROPRIETAIRES 
  {path:"proprietaire_card/:id", component:ProprietaireCardComponent},
  {path:"proprietaire_edit/:id", component:ProprietaireCreateComponent},
  {path:"proprietaire_list", component:ProprietaireListComponent},
  {path:"edit/classeStandard/:id", component:CreateClasseStandardComponent,/* canActivate:[AuthGuardService]*/},
  {path:"list/classeStandard", component:ListeClasseStandardComponent, /* canActivate:[AuthGuardService]*/},
  {path:"look/classeStandard/:id", component:DetailsClasseStandardComponent, /* canActivate:[AuthGuardService]*/},

  {path:"edit/visite/:id", component:CreateVisiteComponent, /* canActivate:[AuthGuardService]*/},
  {path:"list/visite", component:ListeVisiteComponent, /* canActivate:[AuthGuardService]*/},
  {path:"look/visite/:id", component:DetailsClasseStandardComponent, /* canActivate:[AuthGuardService]*/},
  

  {path:"client_card/:id", component:ClientCardComponent, canActivate:[]},
  {path:"client_edit/:id", component:ClientCreateComponent, canActivate:[]},
  {path:"client_list", component:ClientListComponent, canActivate:[]},

  {path:"proprietaire_card/:id", component:ProprietaireCardComponent, /*canActivate:[]*/},
  {path:"proprietaire_edit/:id", component:ProprietaireCreateComponent, /*canActivate:[]*/},
  {path:"proprietaire_list", component:ProprietaireListComponent, /*canActivate:[]*/},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
