import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId:string;

  constructor(private route: ActivatedRoute, private router: Router) {
    // router.events.subscribe(ev => {
    //   console.log(ev.snapshot)
    // })
    // route.url.subscribe(url => {
    //   console.log(url)
    // })
  }

  ngOnInit() {
    // console.log(this.route)

   this.route.params.subscribe(params => {
      this.userId = params.id;
   })
  }

}
