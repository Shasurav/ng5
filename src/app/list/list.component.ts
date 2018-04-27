import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  id;
  name;

  constructor( private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.id = id;
    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.id = id;
      //Do this to get second parameter.
      // let name = (params.get('name'));
      // this.name = name;
      }
    )
  }
   Previous(){
    this.router.navigate(['/another', this.id -1]);
   }
   Next(){
    this.router.navigate(['/another', this.id +1]);
  }
  goToChild(){
    this.router.navigate(['child'], {relativeTo : this.route});
  }
}
