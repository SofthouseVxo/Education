import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdvancedRoutingRoutingModule } from './advanced-routing-routing.module';
import { AdvancedRoutingComponent } from './advanced-routing.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AdvancedRoutingComponent,
    MainComponent,
    LoginComponent,
    UserComponent,
    PageNotFoundComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    AdvancedRoutingRoutingModule
  ],
  exports: [
    AdvancedRoutingComponent
  ],
  providers: [],
})
export class AdvancedRoutingModule { }
