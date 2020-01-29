import { Component, ViewContainerRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-refs',
  templateUrl: './refs.component.html',
  styleUrls: ['./refs.component.css']
})
export class RefsComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) {
    // Reference to the view container
    console.log(viewContainerRef);
  }
  ngOnInit() {
  }

}
