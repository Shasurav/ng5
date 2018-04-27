import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,query,animate,keyframes,stagger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('arrays', [
      transition('* => *',[
        query(':enter', style({opacity:0}),{optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset:0}),
            style({opacity:.5,transform:'translateY(30px)',offset:.3}),
            style({opacity:1,transform:'translateY(0)',offset:1})

          ]))
        ]),{optional:true}),
        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1,transform:'translateY(0)',offset:0}),
            style({opacity:.5,transform:'translateY(30px)',offset:.3}),
            style({opacity:0,transform:'translateY(-75%)',offset:1})

          ]))
        ]),{optional:true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
   
  buttonText : string = 'Add Text';
  modelText : string = 'this is a two way data binding';
  array = ["I'm the first one!"];
  count : number;

  constructor() { }

  ngOnInit() {
    this.count =  this.array.length ;
  }
   
  add() {
    this.array.push(this.modelText);
    this.modelText = "";
    this.count = this.array.length;
  }
  remove(i){
    if ( window.confirm('Are you sure, you want to delete ?') ) { 
        this.array.splice(i,1);
        this.count = this.array.length;
    }
  }
}
