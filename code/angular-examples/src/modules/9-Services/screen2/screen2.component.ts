import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css'],
  providers:[AuthService]
})
export class Screen2Component implements OnInit {

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
