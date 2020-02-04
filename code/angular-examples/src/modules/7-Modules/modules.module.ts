import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModulesComponent } from './modules.component';
import { CounterModule } from './counter/counter.module';
import { MyModule } from './my.module';
// import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterModule,
    MyModule
  ],
  exports: [
    ModulesComponent
  ]
  // providers: [MyServiceService]
})
export class ModulesModule { }
