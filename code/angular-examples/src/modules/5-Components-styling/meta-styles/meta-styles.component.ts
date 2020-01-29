import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta-styles',
  template: `
    <h1>Hello world!</h1>
    <p>Hello Växjö!</p>
  `,
  // styles: ['h1 { font-weight: normal; } p { color: blue; }']
  styleUrls: ['./meta-styles.component.css']
})
export class MetaStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
