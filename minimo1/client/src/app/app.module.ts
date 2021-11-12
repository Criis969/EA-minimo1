import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common"
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaComponent } from './components/persona/persona.component';

import {PersonasService} from "./services/personas.service";
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonaListComponent,
    PersonaComponent,
    SeguimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
