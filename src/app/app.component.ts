import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as menufile from '../assets/structmenuapp.json';
import {HelperService} from './helper/helper.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  title = 'flaws Projects Management';  
  menujson: any = (menufile as any).default ; 
  titregauche : string = '' ; 
  titredroite : string = '' ;

  constructor(helperService : HelperService) { 

  }

  ngOnInit(): void {
    console.log("ngOnInit \"AppComponent\" : avant appel de HelperService :") ; 
    /*this.titregauche = this.menujson[0].entete[0].titregauche ;
    this.titredroite = this.menujson[0].entete[0].titredroite ;*/
    HelperService.fillheadlabels(this);
  }

} 
