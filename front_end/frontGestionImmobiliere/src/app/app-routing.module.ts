import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { ListeClasseStandardComponent } from './composants/classeStandard/liste-classe-standard/liste-classe-standard.component';
import { DetailsClasseStandardComponent } from './composants/classeStandard/details-classe-standard/details-classe-standard/details-classe-standard.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [



  {path:"list/contrat", component:ListeContratComponent},
  
  {path:"edit/contrat/:id", component:CreateContratComponent},

  {path:"edit/classeStandard/:id", component:CreateClasseStandardComponent, canActivate:[AuthGuardService]},
  {path:"list/classeStandard", component:ListeClasseStandardComponent, canActivate:[AuthGuardService]},
  {path:"look/classeStandard/:id", component:DetailsClasseStandardComponent, canActivate:[AuthGuardService]},

  {path:"edit/visite/:id", component:CreateVisiteComponent, canActivate:[AuthGuardService]},
  {path:"list/visite", component:ListeVisiteComponent, canActivate:[AuthGuardService]},
  {path:"look/visite/:id", component:DetailsClasseStandardComponent, canActivate:[AuthGuardService]},

  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
