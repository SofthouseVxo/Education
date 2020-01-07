import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-binding',
  templateUrl: './comp-binding.component.html',
  styleUrls: ['./comp-binding.component.css']
})
export class CompBindingComponent {
  title:string = 'ngBase'
  name:string = 'Doe John'

  changeName(event):void{
    this.name = event;
  }
}
