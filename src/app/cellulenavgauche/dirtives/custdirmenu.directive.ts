import { Directive, ElementRef, Renderer } from '@angular/core';
//import * as menuGauche from '../../../assets/menutest.json';
import * as menuGauche from '../../../assets/menuWithurl.json';


@Directive({
  selector: '[appCustdirmenu]'
})
export class CustdirmenuDirective {

  menujson: any = (menuGauche as any).default;
  htmlMenu: string = "";

  constructor(private curEl: ElementRef, private curRenderer: Renderer) {
    /* let sMenu : string = this.displayMenu();
       curRenderer.setElementProperty(curEl.nativeElement, 'innerHTML', sMenu);*/
    let sMenu: string = this.displayMenuWithUrl();
    curRenderer.setElementProperty(curEl.nativeElement, 'innerHTML', sMenu);
  }

  private displayMenuWithUrl(): string {
    // let titregauche : any  = this.menujson[0].entete[0].titregauche ;
    let labeltree: any = this.menujson;
    let bNewSub: boolean = true;
    for (let key in labeltree) {
      let objMenu = labeltree[key];
      for (let keyMenuGlobal in objMenu) {

        if (keyMenuGlobal == "listemenugauche") {

          const objMenuGauche: any = objMenu[keyMenuGlobal];
          //console.log("keyMenuGlobal", keyMenuGlobal);
          //console.log("objMenu[keyMenuGlobal]",objMenu[keyMenuGlobal]) ;
          //On chaque rubrique de menu
          for (let keyMenuGauche in objMenuGauche) {
            const rubrique: any = objMenuGauche[keyMenuGauche]
            //console.log("keyMenuGauche", keyMenuGauche);            
            //console.log("objMenuGauche[keyMenuGauche]", objMenuGauche[keyMenuGauche]);
            for (let keyContenu in rubrique) {
              const titreOuSsTitre: any = rubrique[keyContenu];
              //console.log("rubrique[keyContenu]", rubrique[keyContenu]);
              for (let keyEntry in titreOuSsTitre) {
                const entry: any = titreOuSsTitre[keyEntry];
                //console.log("titreOuSsTitre[keyEntry]", titreOuSsTitre[keyEntry]);
                console.log("keyEntry", keyEntry);
                console.log("titreOuSsTitre[keyEntry]", titreOuSsTitre[keyEntry]);

                //Construction d'un titre HTML
                //Cas titre sans sous-titre
                if (entry.hasOwnProperty('titre')) {
                  console.log("titre property exists", entry);
                  let sTitre = entry.titre;
                  if (entry.hasOwnProperty('urlt')) {
                    let sUrl = entry.urlt;
                    this.htmlMenu = this.htmlMenu + "<div><a routerLink='/" + sUrl + "'  ng-reflect-router-link='/" + sUrl + "'  href='/" + sUrl + "'  >" + sTitre + "</a></div>";
                  }
                  else {
                    this.htmlMenu = this.htmlMenu + "<div>" + sTitre + "</div>";
                  }

                }
                //Cas titre AVEC sous-titre
                else if (entry.hasOwnProperty('soustitreliste')) {
                  console.log("soustitreliste property exists", entry);
                  let elemSsTitre = entry['soustitreliste']
                  let n: number = 0;
                  let nbSstitres = Object.keys(elemSsTitre).length;
                  console.log('nbSstitres', nbSstitres);
                  for (let keyEntrySub in elemSsTitre) {   //Boucle sur les sous-titres
                    let objSsTitre = elemSsTitre[keyEntrySub];
                    if (objSsTitre.hasOwnProperty('sstitre')) {
                      console.log("sstitre property exists", objSsTitre);
                      let sstitre = objSsTitre.sstitre;
                      if (objSsTitre.hasOwnProperty('urlst')) {
                        let stUrl = objSsTitre.urlst;
                        if (n == 0)
                          this.htmlMenu = this.htmlMenu + "<ul><li><a routerLink='/" + stUrl + "'  ng-reflect-router-link='/" + stUrl + "'  href='/" + stUrl + "'  >" + sstitre + "</a></li>";
                        else if (n < nbSstitres - 1)
                          this.htmlMenu = this.htmlMenu + "<li><a routerLink='/" + stUrl + "'  ng-reflect-router-link='/" + stUrl + "'  href='/" + stUrl + "'  >" + sstitre + "</a></li>";
                        else
                          this.htmlMenu = this.htmlMenu + "<li><a routerLink='/" + stUrl + "'  ng-reflect-router-link='/" + stUrl + "'  href='/" + stUrl + "'  >" + sstitre + "</a></li></ul>";
                      }
                      else {
                        this.htmlMenu = this.htmlMenu + "<div>" + sstitre + "</div>";
                      }
                    }
                    n++;
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("this.htmlMenu", this.htmlMenu);
    return this.htmlMenu;
  }

  



}
