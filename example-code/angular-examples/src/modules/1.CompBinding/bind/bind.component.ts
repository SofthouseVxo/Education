import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  name: string = 'John Doe';
  items: string[] = ['item1', 'item2'];

  constructor() { }

  ngOnInit() {
  }

}
