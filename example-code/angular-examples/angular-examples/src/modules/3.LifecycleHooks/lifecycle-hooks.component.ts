
import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent {
  title = 'Lifecycle testing';
  color:string = "green";
  show:boolean = true;

  constructor(){
    setTimeout(()=>{
      this.color = 'blue';
    }, 2000);

    setTimeout(()=>{
      this.show = false;
    }, 4000)
  }
}
