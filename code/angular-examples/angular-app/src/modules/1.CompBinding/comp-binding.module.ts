import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CompBindingRoutingModule } from './comp-binding-routing.module';
import { CompBindingComponent } from './comp-binding.component';
import { CounterModule } from './counter/counter.module';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { BindComponent } from './bind/bind.component';
import { ChildComponent } from './child/child.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ParentComponent } from './parent/parent.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    CompBindingComponent,
    InputComponent,
    OutputComponent,
    BindComponent,
    ChildComponent,
    TwoWayComponent,
    ParentComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    CompBindingRoutingModule,
    FormsModule,
    CounterModule
  ],
  exports: [
    CompBindingComponent
  ],
  providers: []
})
export class CompBindingModule { }
