import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PipRoutingModule } from './pip-routing.module';
import { PipComponent } from './pip.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    PipComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    PipRoutingModule
  ],
  exports: [
    PipComponent
  ],
  providers: []
})
export class PipModule { }
