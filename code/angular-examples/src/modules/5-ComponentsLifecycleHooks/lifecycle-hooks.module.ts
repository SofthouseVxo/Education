import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  providers: []
})
export class LifecycleHooksModule { }
