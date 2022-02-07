import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as menuGauche from '../../assets/menutest.json';

@Component({
  selector: 'app-cellulenavgauche',
  templateUrl: './cellulenavgauche.component.html',   
  styleUrls: ['./cellulenavgauche.component.css', '../../app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellulenavgaucheComponent implements OnInit, AfterViewInit{



  menujson: any = (menuGauche as any).default ; 

  constructor() { }

  private displayMenu():void {
   // let titregauche : any  = this.menujson[0].entete[0].titregauche ;
    let labeltree : any  = this.menujson;
    console.log("<CellulenavgaucheComponent> - displayMenu()");
    console.log("labeltree",labeltree);

    for (let key in labeltree) {
      let value = labeltree[key];
      console.log("labeltree[key]",labeltree[key]);
    }

    for (let key in labeltree) {
      console.log("strEleMenu[i]", labeltree[key]) ;
      let objMenu = labeltree[key] ; 
      
      for (let keyMenuGlobal in objMenu) {
        console.log("keyMenuGlobal", keyMenuGlobal);
        if (key=="listemenugauche")  //on est sur le noeud d'information menu gauche
            console.log("on est sur listemenugauche");   
            console.log("objMenu[keyMenu] vaut :", objMenu[keyMenuGlobal]) ;
            const objMenuGauche : any = objMenu[keyMenuGlobal] ;
            //On parcours la liste des rubrique
            for (let keyMenuGauche in objMenuGauche) {
                const rubrique : any = objMenuGauche[keyMenuGauche]
                console.log("rubrique", rubrique );
                console.log("JSON.stringify(rubrique)",JSON.stringify(rubrique)) ;
            
              for (let keyContenu in rubrique) {
                const titreOuSsTitre: any = rubrique[keyContenu];
                if (titreOuSsTitre.hasOwnProperty("titre"))
                  console.log("<titreOuSsTitre.titre>", titreOuSsTitre.titre);
                else if (titreOuSsTitre.hasOwnProperty("soustitre"))
                  console.log("<titreOuSsTitre.soustitre>", titreOuSsTitre.soustitre);
                else
                  console.log("titreOuSsTitre", titreOuSsTitre);

                for (let keyEntry in titreOuSsTitre) {
                  const entry: any = titreOuSsTitre[keyEntry];
                  console.log("JSON.stringify(entry)", JSON.stringify(entry));

                }
              }
            }
      }
    }
  }

  ngAfterViewInit(): void {
    console.log("<CellulenavgaucheComponent> - ngAfterViewInit()");
    this.displayMenu();
  }


  ngOnInit() {
    console.log("<CellulenavgaucheComponent> - ngOnInit()");
  }
  

}
