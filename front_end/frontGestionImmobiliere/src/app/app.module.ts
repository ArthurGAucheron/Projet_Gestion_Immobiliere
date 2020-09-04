import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';



import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';

import { ListeImmobilierComponent } from './composants/bienImmobilier/liste-immobilier-achat/liste-immobilier.component';
import { CreateImmobilierComponent } from './composants/bienImmobilier/create-immobilier-achat/create-immobilier.component';

import { ListeClasseStandardComponent } from './composants/classeStandard/liste-classe-standard/liste-classe-standard.component';
import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';


import { PipeClasseStandardPipe } from './Pipes/ClasseStandard/pipe-classe-standard.pipe';
import { SuperficiePipe } from './Pipes/ClasseStandard/superficie.pipe';
import { DetailsClasseStandardComponent } from './composants/classeStandard/details-classe-standard/details-classe-standard/details-classe-standard.component';
import { BienImmoPipe } from './Pipes/Visite/bien-immo.pipe';
import { DetailsVisiteComponent } from './composants/visite/details-visite/details-visite.component';

import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { FicheImmobilierAchatComponent } from './composants/bienImmobilier/fiche-immobilier-achat/fiche-immobilier-achat.component';
import { FicheImmobilierLocationComponent } from './composants/bienImmobilier/fiche-immobilier-location/fiche-immobilier-location.component';
import { CreateImmobilierLocationComponent } from './composants/bienImmobilier/create-immobilier-location/create-immobilier-location.component';
import { ListeImmobilierLocationComponent } from './composants/bienImmobilier/liste-immobilier-location/liste-immobilier-location.component';
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
    ListeClasseStandardComponent,
    CreateClasseStandardComponent,
    CreateContratComponent,
    ListeContratComponent,
    ListeVisiteComponent,
    CreateVisiteComponent,
    PipeClasseStandardPipe,
    SuperficiePipe,
    DetailsClasseStandardComponent,
    BienImmoPipe,
    DetailsVisiteComponent,

    ProprietaireCardComponent,
    FicheImmobilierAchatComponent,
    FicheImmobilierLocationComponent,
    CreateImmobilierLocationComponent,
    ListeImmobilierLocationComponent,
    ClientListComponent,
    ClientCardComponent,
    TableauDeBordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    DataTablesModule
  ],
  providers: [
    ConseillerImmobilier,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
