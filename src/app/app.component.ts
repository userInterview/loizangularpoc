import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as menufile from '../assets/structmenuapp.json';
import {HelperService} from './helper/helper.service'
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnChanges{

  
  titregauche : string = '' ;
  titredroite : string = '' ;
  menujson: any = (menufile as any).default ; 
  i : number = 0 ;
  @Input()
  parentMemInputLoiz = '';

  @Input()
  loizParentMethodForChild = ():void  => {
    console.log("<loizParentMethodForChild> : journalisation dans le parent") ;
  } ;

  constructor(helperService : HelperService) { 

  }

  ngOnInit(): void {
    console.log("ngOnInit \"AppComponent\" : avant appel de HelperService :") ; 
    /*this.titregauche = this.menujson[0].entete[0].titregauche ;
    this.titredroite = this.menujson[0].entete[0].titredroite ;*/
    HelperService.fillheadlabels(this);
  }

  //Le membre memInputLoiz sera lu par le composant enfant
  //Si celui-ci est défini comme @Input
  setMemInputLoiz() : void {
    this.parentMemInputLoiz = 'initialisation par clique No ' + this.i + ' fois.';
    this.i = this.i + 1 ;
  } 

  getChildOutput(event) {
    console.log(event);
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
   console.log("App.commponent a changé !") ;
  }

} 
