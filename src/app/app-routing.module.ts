import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { TousprojetsComponent } from './compmainbas/navigation/tousprojets/tousprojets.component';

const routes: Routes = [
  
  {path:'home', component:AppComponent},
  {path:'tousprojets', component:TousprojetsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
