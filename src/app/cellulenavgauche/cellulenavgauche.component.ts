import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cellulenavgauche',
  templateUrl: './cellulenavgauche.component.html',
  styleUrls: ['./cellulenavgauche.component.css', '../../app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CellulenavgaucheComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    //console.log("<CellulenavgaucheComponent> - ngAfterViewInit()");
  }

  ngOnInit() {
    //console.log("<CellulenavgaucheComponent> - ngOnInit()");
  }

}
