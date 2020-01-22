import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PipComponent } from './pip.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    PipComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PipComponent
  ],
  providers: []
})
export class PipModule { }
