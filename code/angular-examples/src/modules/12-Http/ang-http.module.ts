import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngHttpComponent } from './ang-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AngHttpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AngHttpComponent
  ],
  providers: [],
})
export class AngHttpModule { }
