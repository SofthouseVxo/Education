import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser:string;

  constructor() {

  }

  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }

  public login(user){
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
