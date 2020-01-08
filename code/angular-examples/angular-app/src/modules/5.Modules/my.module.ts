import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondComponent
  ],
  providers: [
    MyServiceService
  ]
})
export class MyModule { }
