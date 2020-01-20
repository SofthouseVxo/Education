import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  providers: []
})
export class LifecycleHooksModule { }
