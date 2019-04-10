import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _name:string = '';

  @Input()
  set name(name: string) {
    console.log('sets');
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  logHello(): void {
    console.log('Logging Hello');
  }

}
