import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Output()onAddOne = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addOne(){
    this.onAddOne.emit(23);
  }

}
