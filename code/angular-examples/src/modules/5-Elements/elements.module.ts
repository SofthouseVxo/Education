import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementsComponent } from './elements.component';

@NgModule({
  declarations: [
  ElementsComponent],
  imports: [
    BrowserModule,
  ],
  exports: [
    ElementsComponent
  ],
  providers: []
})
export class ElementsModule { }
