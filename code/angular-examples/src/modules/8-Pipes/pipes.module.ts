import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PipesComponent } from './pipes.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent
  ],
  providers: []
})
export class PipesModule { }
