import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as menuGauche from '../../assets/menutest.json';

@Component({
  selector: 'app-cellulenavgauche',
  templateUrl: './cellulenavgauche.component.html',
  styleUrls: ['./cellulenavgauche.component.css', '../../app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellulenavgaucheComponent implements OnInit, AfterViewInit {



  menujson: any = (menuGauche as any).default;
  htmlMenu : string  = "" ;
  constructor() { }

  private displayMenu(): void {
    // let titregauche : any  = this.menujson[0].entete[0].titregauche ;
    let labeltree: any = this.menujson;
    let bNewSub : boolean = true ;
    for (let key in labeltree) {
      let objMenu = labeltree[key];      
      for (let keyMenuGlobal in objMenu) {

        if (keyMenuGlobal == "listemenugauche") {

          const objMenuGauche: any = objMenu[keyMenuGlobal];
          console.log("keyMenuGlobal", keyMenuGlobal);
          //On parcours la liste des rubrique
          for (let keyMenuGauche in objMenuGauche) {
            const rubrique: any = objMenuGauche[keyMenuGauche]
            console.log("keyMenuGauche", keyMenuGauche);
            for (let keyContenu in rubrique) {
              const titreOuSsTitre: any = rubrique[keyContenu];
              console.log("keyContenu", keyContenu);
              for (let keyEntry in titreOuSsTitre) {
                const entry: any = titreOuSsTitre[keyEntry];
                console.log("keyEntry", keyEntry);
                //Construction d'un titre HTML
                if (entry.hasOwnProperty('titre'))
                {
                 bNewSub = true ;
                console.log('titre existe');
                console.log('entry.titre',entry.titre);
                //premier titre du cadre
                if (this.htmlMenu == "") 
                  this.htmlMenu = '<div>'  + entry.titre +'</div>' ;
                //autre titre du cadre
                else
                  this.htmlMenu = this.htmlMenu + '<div>'  + entry.titre +'</div>';
                }
                //Construction d'un sous-titre HTML
                else if (entry.hasOwnProperty('soustitre'))
                {
                let objListesSsTitres = entry.soustitre[0] ;
                //si premier sous-titre 
                let n:number = 0 ;
                let nbSstitres =  Object.keys(objListesSsTitres).length  ;
                console.log('nbSstitres',nbSstitres) ;
                for ( let  keysstitre in objListesSsTitres) {
                  if (n==0) 
                    this.htmlMenu = this.htmlMenu + '<div><ul><li>' + objListesSsTitres[keysstitre] + '</li>';
                  else if (n < nbSstitres-1)
                    this.htmlMenu = this.htmlMenu + '<li>' + objListesSsTitres[keysstitre] +'</li>';
                  else
                    this.htmlMenu = this.htmlMenu + '<li>' + objListesSsTitres[keysstitre] + '</li></ul></div>' ;                    
                  n ++ ;
                }


                //si dernier sous-titre : ajout 
                console.log('soustitre existe');                
                console.log('entry.soustitre',entry.soustitre);
                bNewSub = false ;
                }

              }
            }
          }
        }
      }
    }  
      console.log("this.htmlMenu",this.htmlMenu) ;
  }

  ngAfterViewInit(): void {
    console.log("<CellulenavgaucheComponent> - ngAfterViewInit()");
    this.displayMenu();
  }


  ngOnInit() {
    console.log("<CellulenavgaucheComponent> - ngOnInit()");
  }


}
