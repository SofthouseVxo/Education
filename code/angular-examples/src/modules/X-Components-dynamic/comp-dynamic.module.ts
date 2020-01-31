import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompDynamicComponent } from './comp-dynamic.component';


@NgModule({
  declarations: [
    CompDynamicComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompDynamicComponent
  ],
  providers: []
})
export class CompDynamicModule { }
