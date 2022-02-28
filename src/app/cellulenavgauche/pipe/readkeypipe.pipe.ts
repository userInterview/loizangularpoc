import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readkeypipe'
})
export class ReadkeypipePipe implements PipeTransform {




  
  transform(objEntryMenu: any): any {
    console.log("<ReadkeypipePipe> - objEntryMenu",objEntryMenu);
    let buildEleMenu:string = "";

    for (const key in objEntryMenu) {
      const TitleOrSub = objEntryMenu[key] ;
      if ( TitleOrSub.hasOwnProperty('titre')) {

      }
      else if ( TitleOrSub.hasOwnProperty('soustitreliste')) {

      }
    }

    return JSON.stringify(objEntryMenu);
  }

}
