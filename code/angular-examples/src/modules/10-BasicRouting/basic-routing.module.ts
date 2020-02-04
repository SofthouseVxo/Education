import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicRoutingRoutingModule } from './basic-routing-routing.module';
import { BasicRoutingComponent } from './basic-routing.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    BasicRoutingComponent,
    MainComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BasicRoutingRoutingModule
  ],
  exports: [
    BasicRoutingComponent
  ],
  providers: []
})
export class BasicRoutingModule { }
