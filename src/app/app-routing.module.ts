import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { TousprojetsComponent } from './compmainbas/navigation/tousprojets/tousprojets.component';
import {ToutesfaillesComponent} from './compmainbas/navigation/toutesfailles/toutesfailles.component' ;
import {TousproduitsComponent} from './compmainbas/navigation/tousproduits/tousproduits.component' ;

const routes: Routes = [
  
  {path:'home', component:AppComponent},
  {path:'tousprojets', component:TousprojetsComponent},
  {path:'listefailles', component:ToutesfaillesComponent},
  {path:'listeproduits', component:TousproduitsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
