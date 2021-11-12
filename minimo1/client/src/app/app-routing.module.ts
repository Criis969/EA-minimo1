import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonaListComponent} from "./components/persona-list/persona-list.component";
import {PersonaComponent} from "./components/persona/persona.component";
import {SeguimientoComponent} from "./components/seguimiento/seguimiento.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
  {
    path: 'personas',
    component: PersonaListComponent
  },
  {
    path: 'personas/:id',
    component: PersonaComponent
  },
  {
    path: 'seguimiento',
    component: SeguimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
