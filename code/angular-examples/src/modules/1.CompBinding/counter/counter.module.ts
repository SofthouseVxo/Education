import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
