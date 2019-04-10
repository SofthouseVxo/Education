import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  items: string[];

  constructor(private itemsService: ItemsService) {
    // this.items = itemsService.getItems();
    this.items = itemsService.items;

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }
}
