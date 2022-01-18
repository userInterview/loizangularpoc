import { Injectable } from '@angular/core';

import * as menufile from '../../assets/structmenuapp.json';

  
@Injectable({
  providedIn: 'root'
})  
export class HelperService {
 
  menujson: any = (menufile as any).default;

  constructor() { }

  static fillheadlabels(objComp:any):void {    
    objComp.titregauche = objComp.menujson[0].entete[0].titregauche ;
    objComp.titredroite = objComp.menujson[0].entete[0].titredroite ;
  }
}
