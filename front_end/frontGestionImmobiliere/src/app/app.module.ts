import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { LoginComponent } from './guards/login/login.component';
import { LogoutComponent } from './guards/logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { AuthGuardService } from './guards/auth-guard.service';

import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';

import { ListeImmobilierComponent } from './composants/bienImmobilier/liste-immobilier-achat/liste-immobilier.component';
import { CreateImmobilierComponent } from './composants/bienImmobilier/create-immobilier-achat/create-immobilier.component';

import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
import { FicheImmobilierAchatComponent } from './composants/bienImmobilier/fiche-immobilier-achat/fiche-immobilier-achat.component';
import { FicheImmobilierLocationComponent } from './composants/bienImmobilier/fiche-immobilier-location/fiche-immobilier-location.component';
import { CreateImmobilierLocationComponent } from './composants/bienImmobilier/create-immobilier-location/create-immobilier-location.component';
import { ListeImmobilierLocationComponent } from './composants/bienImmobilier/liste-immobilier-location/liste-immobilier-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LoginComponent,
    LogoutComponent,

    
    ProprietaireCreateComponent,
    ProprietaireListComponent,
    ClientCreateComponent,

    ListeImmobilierComponent,
    CreateImmobilierComponent,
    CreateClasseStandardComponent,
    CreateContratComponent,
    ListeContratComponent,
    ListeVisiteComponent,
    CreateVisiteComponent,
    ProprietaireCardComponent,
    FicheImmobilierAchatComponent,
    FicheImmobilierLocationComponent,
    CreateImmobilierLocationComponent,
    ListeImmobilierLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [
    AuthGuardService,{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
