import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  authorized: boolean = true;

  constructor(public router: Router) {

  }

  canActivate(): boolean {
    if (!this.authorized) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
