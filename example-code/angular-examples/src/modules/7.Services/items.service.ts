import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public items: string[] = ['item', 'item'];

  log(msg: any)   {
    console.log(msg);
  }

  getItems() {
    return this.items;
  }

  addItem(){
    this.items.push('item');
  }
}
