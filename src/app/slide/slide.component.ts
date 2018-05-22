import { Component, OnInit , EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  carousselActions = new EventEmitter<string|MaterializeAction>();
  imageSrc = require('../../assets/slide-image-1.jpg');
  imageSrc2 = require('../../assets/slide-image-2.jpg');
  imageSrc3 = require('../../assets/slide-image-3.jpg');

  constructor() { }

  ngOnInit() {
    
  }

  //commandes
  prev(){
    this.carousselActions.emit({action:"carousel",params:['prev']});
  }

  next(){
      this.carousselActions.emit({action:"carousel",params:['next']});
  }
}
