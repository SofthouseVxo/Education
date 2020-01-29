import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-styles',
  template: `
    <h1>Hello world!</h1>
    <p>Hello Växjö!</p>
  `,
  styles: [`
  h1 { 
    font-weight: normal;
  } 
  p { 
    color: blue;
  }
  :host {
    background: green;
  }
  `]
})
export class HostStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
