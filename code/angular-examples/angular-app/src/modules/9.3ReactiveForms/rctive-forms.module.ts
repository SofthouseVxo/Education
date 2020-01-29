import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RctiveFormsComponent } from './rctive-forms.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    RctiveFormsComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[
    RctiveFormsComponent
  ] ,
  providers: [],
})
export class RctiveFormsModule { }
