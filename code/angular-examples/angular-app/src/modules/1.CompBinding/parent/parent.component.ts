import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() name:string;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.name = 'Harry';
      // this.name = null;
    }, 3000)
  }

}
