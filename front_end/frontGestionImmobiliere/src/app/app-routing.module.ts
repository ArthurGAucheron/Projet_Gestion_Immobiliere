import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { ListeClasseStandardComponent } from './composants/classeStandard/liste-classe-standard/liste-classe-standard.component';
import { DetailsClasseStandardComponent } from './composants/classeStandard/details-classe-standard/details-classe-standard/details-classe-standard.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';

const routes: Routes = [



  {path:"list/contrat", component:ListeContratComponent},
  
  {path:"edit/contrat/:id", component:CreateContratComponent},

  {path:"edit/classeStandard/:id", component:CreateClasseStandardComponent},
  {path:"list/classeStandard", component:ListeClasseStandardComponent},
  {path:"look/classeStandard/:id", component:DetailsClasseStandardComponent},

  {path:"edit/visite/:id", component:CreateVisiteComponent},
  {path:"list/visite", component:ListeVisiteComponent},
  {path:"look/visite/:id", component:DetailsClasseStandardComponent},

  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
