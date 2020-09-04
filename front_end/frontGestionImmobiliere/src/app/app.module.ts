import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';

import { ListeImmobilierComponent } from './composants/bienImmobilier/liste-immobilier/liste-immobilier.component';
import { CreateImmobilierComponent } from './composants/bienImmobilier/create-immobilier/create-immobilier.component';
import { ModifImmobilierComponent } from './composants/bienImmobilier/modif-immobilier/modif-immobilier.component';

import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { ClientListComponent } from './composants/client/client-list/client-list.component';
import { ClientCardComponent } from './composants/client/client-card/client-card.component';
import { ConseillerImmobilier } from './modeles/ConseillerImmobilier';
import { TableauDeBordComponent } from './composants/tableau-de-bord/tableau-de-bord.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
  

    
    ProprietaireCreateComponent,
    ProprietaireListComponent,
    ClientCreateComponent,

    ListeImmobilierComponent,
    CreateImmobilierComponent,
    ModifImmobilierComponent,
    CreateClasseStandardComponent,
    CreateContratComponent,
    ListeContratComponent,
    ListeVisiteComponent,
    CreateVisiteComponent,
    ProprietaireCardComponent,
    ClientListComponent,
    ClientCardComponent,
    TableauDeBordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  
  ],
  providers: [
    ConseillerImmobilier,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
