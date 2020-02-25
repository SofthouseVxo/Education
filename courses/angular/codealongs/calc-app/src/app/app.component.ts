import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myInfo: string = 'first info';
  myNr: number = 0;

  constructor(){
    setInterval(()=>{
      this.myNr += 1;
    }, 1000);
  }

  changeInfo($event){
    this.myInfo = $event;
  }
}