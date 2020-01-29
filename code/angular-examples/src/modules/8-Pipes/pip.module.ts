import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipComponent } from './pip.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    PipComponent,
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipComponent
  ],
  providers: []
})
export class PipModule { }
