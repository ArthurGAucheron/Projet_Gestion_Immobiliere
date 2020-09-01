import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';

const routes: Routes = [

  {path:"list/contrat", component:ListeContratComponent},
  
  {path:"edit/contrat/:id", component:CreateContratComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
