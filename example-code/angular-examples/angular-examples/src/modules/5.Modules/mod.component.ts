import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent {
  title:string = 'ngBase'
  name:string = 'Doe John'

  constructor(private myService: MyServiceService){
    console.log(myService.serviceValue);
  }
  changeName(event){
    this.name = event;
  }
}
