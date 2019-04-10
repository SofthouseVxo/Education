import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  imports: [
    BrowserModule,
    LifecycleHooksRoutingModule
  ],
  exports: [
    LifecycleHooksComponent,
    LifecyclesComponent
  ],
  providers: []
})
export class LifecycleHooksModule { }
