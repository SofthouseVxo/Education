import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BRoutingRoutingModule } from './b-routing--routing.module';
import { BRoutingComponent } from './b-routing.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    BRoutingComponent,
    MainComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BRoutingRoutingModule
  ],
  exports: [
    BRoutingComponent
  ],
  providers: []
})
export class BRoutingModule { }
