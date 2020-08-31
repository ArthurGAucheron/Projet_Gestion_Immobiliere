import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietaireComponent } from './composants/proprietaire/proprietaire/proprietaire.component';
import { ProprietaireCreateComponent } from './composants/proprietaire/proprietaire-create/proprietaire-create.component';
import { ProprietaireListComponent } from './composants/proprietaire/proprietaire-list/proprietaire-list.component';
import { ClientCreateComponent } from './composants/client/client-create/client-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietaireComponent,
    ProprietaireCreateComponent,
    ProprietaireListComponent,
    ClientCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
