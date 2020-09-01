import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';

const routes: Routes = [

  // URLs : gestion des CONTRATS
  {path:"contrat/list", component:ListeContratComponent,},
  {path:"contrat/edit/:id", component:CreateContratComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
