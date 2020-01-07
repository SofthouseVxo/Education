import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent
  ],
  declarations: [CounterComponent, HelloComponent]
})
export class CounterModule { }
