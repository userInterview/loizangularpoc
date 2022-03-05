          import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
          import { Router } from '@angular/router';
          import * as menuGauche from '../../assets/menuWithurl.json';

          @Component({
            selector: 'app-cellulenavgauche',
            templateUrl: './cellulenavgauche.component.html',
            styleUrls: ['./cellulenavgauche.component.css', '../../app/app.component.css'],
            encapsulation: ViewEncapsulation.None
          })
          export class CellulenavgaucheComponent implements OnInit, AfterViewInit {


            menujson: any = (menuGauche as any).default;
            attrObjListeMenuGAuche: any;
            attrObjListeMenuGAucheString: any;

            constructor( private router:Router )  { }

            ngAfterViewInit(): void {
              //console.log("<CellulenavgaucheComponent> - ngAfterViewInit()");
              //this.mouchardeObj(this.attrObjListeMenuGAuche);
            }

            ngOnInit() {
              console.log("<CellulenavgaucheComponent> - ngOnInit()");
              this.displayMenuWithUrl();
            }

            private displayMenuWithUrl(): void {
              // let titregauche : any  = this.menujson[0].entete[0].titregauche ;
              let labeltree: any = this.menujson;
              let bNewSub: boolean = true;
              for (let key in labeltree) {
                let objMenu = labeltree[key];
                for (let key in objMenu) {
                  let listeMenu = objMenu[key];
                  console.log("key", key);
                  if (key == "listemenugauche") {
                    console.log("key",key);
                    console.log(" objMenu[key]", objMenu[key]) ;
                    this.attrObjListeMenuGAuche = objMenu[key];
                  }
                }
              }
            }

            convtost(argobj: any): string {
              let strObj = JSON.stringify(argobj);
             // window.alert(strObj);
              return strObj;
            }

            mouchardeObj(argobj: any): void {
              let strObj = JSON.stringify(argobj);
              window.alert(strObj);
            }

            firstValue(argobj: any): any {
            console.log("<firstValue> - argobj : ", argobj) ;
            //on récupère la valeur chaine du premier attribut menugaucheX
            //on le convertit en chaine
            let strAttr = (Object.keys(argobj)[0]).toString();
            return(argobj[strAttr]) ;
           }

           navig(strpath:string):void {
              console.log("<navig>  vers : ",strpath) ;
              this.router.navigateByUrl(strpath) ;
           }

          }
