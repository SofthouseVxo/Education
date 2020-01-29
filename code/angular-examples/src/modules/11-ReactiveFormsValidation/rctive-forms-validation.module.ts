import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RctiveFormsValidationComponent } from './rctive-forms-validation.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    RctiveFormsValidationComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RctiveFormsValidationComponent
  ],
  providers: [],
})
export class RctiveFormsValidationModule { }
