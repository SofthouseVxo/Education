import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count = 0;
  increment = 1;

  updateIncrement($event) {
    this.increment = Number($event.target.value);
  }

  update() {
    this.count += this.increment;
  }
}
