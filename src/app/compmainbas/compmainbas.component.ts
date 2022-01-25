import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compmainbas',
  templateUrl: './compmainbas.component.html',
  //styleUrls: ['../app/app.component.css','./compmainbas.component.css'],  
  styleUrls: ['./compmainbas.component.css'],  
  encapsulation: ViewEncapsulation.None
})
export class CompmainbasComponent implements OnInit {

  i : number ;
  j : number ;
  k : number ;
  contenu : string ;
  @Input()
  enfMemInputLoiz = '';

  @Input()
  attrbut : string ;

  constructor() { 

  }

  ngOnInit() {
    this.i = 0 ;
    this.j = 0 ;
    this.k = 0 ;
  }

  cliquer():void {
    this.i = this.i+1 ;
    console.log("<cliquer()> : vous avez cliqué " + this.i + "fois !!") ;
  }

  setattr():string {
    this.j = this.j + 1 ;
    this.attrbut = "attribut \"attrbut\" initialisé " + this.j +" fois" ;
    console.log(this.attrbut) ;
    return this.attrbut
  }


  setInnerHtml() :void {
  this.contenu = "variable membre \"contenu\" initialise attribut du DOM \"innerHTML\" par <i>attribute binding</i> (du model vers le template)" ;
  }

  readstyle():void {
    var objdiv = document.getElementById("mondiv") ;
    var attrStyle = objdiv.getAttribute("style") ;
    console.log(attrStyle.toString()) ;
}

  membstyle : object ;
  setMemBStyle():void {
    this.membstyle = {"color":"blue"} ;
  }

  //Cet attribut sera envoyé au parent
  @Output() 
  memLoizOutput = new EventEmitter<string>() ;

  setLoizOutput():void {
    this.k = this.k+1 ;        
    this.memLoizOutput.emit("envoi depuis compmainbas.componants.ts vers parent app.componant.ts  - No " + this.k);
  }

  @Input()
  loizInheritedMethodForChild = ():void  => { } ;

}
