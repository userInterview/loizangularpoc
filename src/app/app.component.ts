import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {HelperService} from './helper/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  constructor(helperService : HelperService) { 

  } 

} 
