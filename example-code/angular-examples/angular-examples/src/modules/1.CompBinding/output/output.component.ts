import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() onChangeName = new EventEmitter<string>();

  constructor() { }

  onClicked() {
    this.onChangeName.emit('John Doe');
  }
}
