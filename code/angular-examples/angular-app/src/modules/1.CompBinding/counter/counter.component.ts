import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count:number = 0;
  increment:number = 1;

  updateIncrement($event):void {
    this.increment = Number($event.target.value);
  }

  update():void {
    this.count += this.increment;
  }
}
