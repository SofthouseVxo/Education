import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  authorized: boolean = false;

  constructor(public router: Router) {

  }

  canActivate(): boolean {
    console.log('tries to login')
    if (!this.authorized) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
