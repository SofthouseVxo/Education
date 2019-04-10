import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  // styles: ['.list-item-style { color: #ff0000;} .special {color: #00ffff;}']
  // styles: [`
  //   .list-item-style { color: #ff0000;}
  //   .special {color: #00ffff;}
  // `]

  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() myColor: string;

  item1:string = 'item1';
  item2:string = 'item2';

  isSpecial:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
