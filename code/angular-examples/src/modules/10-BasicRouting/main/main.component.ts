import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // console.log(val);
    });
  }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/user', 'robin']);
  }

}
