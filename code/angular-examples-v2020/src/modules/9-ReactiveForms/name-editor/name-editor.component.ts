import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');

  constructor(){
    console.log(this.name);
  }
  updateName() {
    console.log(this.name);
    this.name.setValue('Nancy');
  }
}
