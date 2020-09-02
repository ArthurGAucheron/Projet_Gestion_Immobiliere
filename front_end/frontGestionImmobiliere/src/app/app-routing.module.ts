import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ClientCardComponent } from './composants/client/client-card/client-card.component';
import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';
import { ClientListComponent } from './composants/client/client-list/client-list.component';
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [

  {path:"edit/contrat/:id", component:CreateContratComponent},

  {path:"client_card/:id", component:ClientCardComponent, /*canActivate:[]*/},
  {path:"client_edit/:id", component:ClientCreateComponent, /*canActivate:[]*/},
  {path:"client_list", component:ClientListComponent, /*canActivate:[]*/},

  {path:"proprietaire_card/:id", component:ProprietaireCardComponent, /*canActivate:[]*/},
  {path:"proprietaire_edit/:id", component:ProprietaireCreateComponent, /*canActivate:[]*/},
  {path:"proprietaire_list", component:ProprietaireListComponent, /*canActivate:[]*/},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
