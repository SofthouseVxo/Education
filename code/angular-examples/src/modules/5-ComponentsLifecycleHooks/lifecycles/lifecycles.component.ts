import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent implements OnInit {

  // Always gets called first
  constructor() {
    console.log('LS constructor gets called');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('LS ngOnInit gets called');

  }

  // Gets called everytime the @Input changes
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('LS ngOnChanges');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('LS ngAfterViewInit');
  }

  ngOnDestroy(): boolean {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // alert('warning!')
    console.log('LS ngOnDestroy');
    return false;
  }

}
