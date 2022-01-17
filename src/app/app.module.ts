import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routage
import { AppRoutingModule } from './app-routing.module';
//composants template
import { AppComponent } from './app.component';
import { CompmainbasComponent } from './compmainbas/compmainbas.component';

//composant service
import {LoizservhttpService} from './loizservhttp.service';
import { VueappelhttpComponent } from './compmainbas/vueappelhttp/vueappelhttp.component' ;

@NgModule({
  declarations: [
    AppComponent,
    CompmainbasComponent,
    VueappelhttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoizservhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
