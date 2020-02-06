import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css'],
  providers:[AuthService]
})
export class Screen1Component implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }

  checkStatus():void {
    alert('Logged in: ' + Boolean(this.authService.checkIfLoggedIn()));
    // this.authService.checkIfLoggedIn();
  }

  login():void {
    this.authService.login('John Doe')
  }

  logout():void {
    this.authService.logout()
  }
}
