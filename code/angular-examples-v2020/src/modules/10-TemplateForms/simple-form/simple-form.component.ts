import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  ages = [20, 30, 40, 50];

  model = new User(18, 'Dr IQ', this.ages[0]);

  submitted = false;

  onSubmit() {
    console.log(this.model);
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
