import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  list: string[] = ['first', 'second', 'third', 'fourth'];
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.list.push('nisse');
    }, 3000)
  }

}
