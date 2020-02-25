import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:number = 0;
  @Input()nr;

  constructor() { }

  ngOnInit() {
    console.log('nr in calculator', this.nr);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    
  }

  onAddOne(value){
    this.result += value;
  }

}
