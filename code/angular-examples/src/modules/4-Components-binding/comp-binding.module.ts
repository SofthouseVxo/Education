import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompBindingComponent } from './comp-binding.component';
import { CounterModule } from './counter/counter.module';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { BindComponent } from './bind/bind.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { RefsComponent } from './refs/refs.component';
import { ViewChildElementComponent } from './view-child-element/view-child-element.component';

@NgModule({
  declarations: [
    CompBindingComponent,
    InputComponent,
    OutputComponent,
    BindComponent,
    ChildComponent,
    ParentComponent,
    ViewChildComponent,
    RefsComponent,
    ViewChildElementComponent
  ],
  imports: [
    CommonModule,
    CounterModule
  ],
  exports: [
    CompBindingComponent
  ],
  providers: []
})
export class CompBindingModule { }
