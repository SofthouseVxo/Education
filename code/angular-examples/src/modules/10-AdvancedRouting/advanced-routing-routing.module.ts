import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';

import {
  RouteGuardService
} from './route-guard.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'user/:id', component: UserComponent,
    canActivate: [RouteGuardService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'child', component: ChildComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    data: { title: 'Main' },
    canActivate: [RouteGuardService]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AdvancedRoutingRoutingModule { }
