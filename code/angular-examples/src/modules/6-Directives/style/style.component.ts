import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input()myStyle: string;

  constructor() { }

  ngOnInit() {
    console.log(this.myStyle);
  }

  dynamicStyles(myBool:boolean):Object{
    if(myBool === true){
      return {'color': 'blue'};
    }
  }

}
