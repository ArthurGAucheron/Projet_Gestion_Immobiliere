import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';
=======
import { HeaderComponentComponent } from './header-component/header-component.component';

import { LoginComponent } from './guards/login/login.component';
import { LogoutComponent } from './guards/logout/logout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { AuthGuardService } from './guards/auth-guard.service';

import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';

>>>>>>> b6e5ca3121f3a45ab0e73630ca16e4e2166067ce
import { ListeImmobilierComponent } from './composants/bienImmobilier/liste-immobilier/liste-immobilier.component';
import { CreateImmobilierComponent } from './composants/bienImmobilier/create-immobilier/create-immobilier.component';
import { ModifImmobilierComponent } from './composants/bienImmobilier/modif-immobilier/modif-immobilier.component';

import { CreateClasseStandardComponent } from './composants/classeStandard/create-classe-standard/create-classe-standard.component';
import { CreateContratComponent } from './composants/contrat/create-contrat/create-contrat.component';
import { ListeContratComponent } from './composants/contrat/liste-contrat/liste-contrat.component';
import { ListeVisiteComponent } from './composants/visite/liste-visite/liste-visite.component';
import { CreateVisiteComponent } from './composants/visite/create-visite/create-visite.component';
<<<<<<< HEAD
import { ProprietaireCardComponent } from './composants/proprietaire/proprietaire-card/proprietaire-card.component';
=======

>>>>>>> b6e5ca3121f3a45ab0e73630ca16e4e2166067ce

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProprietaireCreateComponent,
    ProprietaireListComponent,
    ClientCreateComponent,
=======
    HeaderComponentComponent,
    LoginComponent,
    LogoutComponent,

    
    ProprietaireCreateComponent,
    ProprietaireListComponent,
    ClientCreateComponent,

>>>>>>> b6e5ca3121f3a45ab0e73630ca16e4e2166067ce
    ListeImmobilierComponent,
    CreateImmobilierComponent,
    ModifImmobilierComponent,
    CreateClasseStandardComponent,
    CreateContratComponent,
    ListeContratComponent,
    ListeVisiteComponent,
<<<<<<< HEAD
    CreateVisiteComponent,
    ProprietaireCardComponent
=======
    CreateVisiteComponent

>>>>>>> b6e5ca3121f3a45ab0e73630ca16e4e2166067ce
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,{provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
