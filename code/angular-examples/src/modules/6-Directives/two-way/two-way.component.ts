import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  text:string;
  name:string = '';

  constructor() { }

  onKey($event):void{
    // console.log($event.target.value);
    console.log(this.text);
  }

  onClick():void{
    console.log(this.text);
    console.log(this.name);
  }

}
