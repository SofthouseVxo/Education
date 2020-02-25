import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent implements OnInit {

  @Input() shipInfo;
  @Output() clearForm = new EventEmitter<string>();

  expanded:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onClickClear(){
    this.clearForm.emit();
  }

}
