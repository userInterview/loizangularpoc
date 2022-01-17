import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as menufile from '../assets/structmenuapp.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  title = 'flaws Projects Management';  
  menujson: any = (menufile as any).default;
  titregauche : String = '';

  constructor() { 

  }

  ngOnInit(): void {
    console.log("ngOnInit \"AppComponent\"") ; 
    /*console.log(menufile);
    console.log("this.menujson : ", this.menujson) ;
    console.log("this.menujson[0] : ", this.menujson[0]) ;*/
    console.log("this.menujson[0].entete[0].titregauche : ", this.menujson[0].entete[0].titregauche) ;
    this.titregauche = this.menujson[0].entete[0].titregauche ;
    //default[0].entete[""0""].titregauche
    //menufile["0"].entete["0"].titregauche
  }

} 
