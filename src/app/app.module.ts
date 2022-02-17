import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routage
import { AppRoutingModule } from './app-routing.module';
//composants template
import { AppComponent } from './app.component';
import { CompmainbasComponent } from './compmainbas/compmainbas.component';
import { VueappelhttpComponent } from './compmainbas/vueappelhttp/vueappelhttp.component' ;

//composant service
import {LoizservhttpService} from './loizservhttp.service';
import {HelperService} from './helper/helper.service';
import { CellulenavgaucheComponent } from './cellulenavgauche/cellulenavgauche.component';
import { CustdirmenuDirective } from './cellulenavgauche/dirtives/custdirmenu.directive';
import { TousprojetsComponent } from './compmainbas/navigation/tousprojets/tousprojets.component';

@NgModule({
  declarations: [
    AppComponent,
    CompmainbasComponent,
    VueappelhttpComponent,
    CellulenavgaucheComponent,
    CustdirmenuDirective,
    TousprojetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoizservhttpService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
