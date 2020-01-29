import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    // router.events.subscribe((val) => {
    //   console.log(val)
    // });
    // route.data.subscribe(data => {
    //   console.log(data);
    // })
  }

  ngOnInit() {
  }

  navigate(): void {
    this.router.navigate(['/user', '1']);
  }

}
