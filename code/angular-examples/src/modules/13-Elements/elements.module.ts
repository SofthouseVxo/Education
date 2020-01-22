import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementsComponent } from './elements.component';
import { SomeElementComponent } from './some-element/some-element.component';

@NgModule({
  declarations: [
  ElementsComponent,
  SomeElementComponent],
  imports: [
    BrowserModule,
  ],
  exports: [
    ElementsComponent
  ],
  providers: []
})
export class ElementsModule { }
