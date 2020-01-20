import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompDynamicComponent } from './comp-dynamic.component';


@NgModule({
  declarations: [
    CompDynamicComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CompDynamicComponent
  ],
  providers: []
})
export class CompDynamicModule { }
