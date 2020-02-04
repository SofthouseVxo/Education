import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-7-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  title:string = 'ngBase'
  name:string = 'Doe John'

  constructor(private myService: MyServiceService){
    console.log(myService.serviceValue);
  }
  changeName(event){
    this.name = event;
  }
}
