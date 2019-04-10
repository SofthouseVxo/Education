import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
    console.log(itemsService.getItems());

  }

  ngOnInit() {
  }

  addItem() : void {
    this.itemsService.addItem();
  }
}
