import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  isActive: boolean = false;
  isDisabled: boolean = false;

  constructor() {
    console.log('run constructor')
    console.log(this.isActive);
   }

  ngOnInit() {
    console.log('runs on init')
    this.isActive = !this.isActive;
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit')
  }

  toggle():void{
    this.isActive = !this.isActive;
  }
}
