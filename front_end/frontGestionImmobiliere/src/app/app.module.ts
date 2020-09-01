import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    ProprietaireCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
