import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementsComponent } from './elements.component';
import { SomeElementComponent } from './some-element/some-element.component';

@NgModule({
  declarations: [
  ElementsComponent,
  SomeElementComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ElementsComponent
  ],
  providers: []
})
export class ElementsModule { }
