import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsValidationComponent } from './reactive-forms-validation.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    ReactiveFormsValidationComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsValidationComponent
  ],
  providers: [],
})
export class ReactiveFormsValidationModule { }
