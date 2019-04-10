import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {


  ages = [17,18,19,20,21];

  model = new User(17, 'Robin', this.ages[0],);

  submitted = false;

  onSubmit() { this.submitted = true; }

  check(age){
    console.log('happens');
    console.log(age);
  }


}
