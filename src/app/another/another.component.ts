import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


import {DemoService} from '../data.service';

 
@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  food : object =[];
  

  
  constructor(private _service : DemoService, private router : Router) { }

  ngOnInit() {
    this.getFoods();   
                                                                                                                                                                                                                                  
  }
  getFoods() {
    this._service.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { this.food = data;console.log(this.food);},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
  onSelect(foods){
     this.router.navigate(['/another', foods.id /*, foods.name*/]);
  };
 

}
