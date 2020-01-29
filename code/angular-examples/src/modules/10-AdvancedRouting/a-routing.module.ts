import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ARoutingRoutingModule } from './a-routing-routing.module';
import { ARoutingComponent } from './a-routing.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    ARoutingComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    PageNotFoundComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ARoutingRoutingModule
  ],
  exports: [
    ARoutingComponent
  ],
  providers: [],
})
export class ARoutingModule { }
