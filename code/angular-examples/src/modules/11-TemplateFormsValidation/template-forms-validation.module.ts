import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TemplateFormsValidationComponent }  from './template-forms-validation.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({

  declarations: [
    TemplateFormsValidationComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateFormsValidationComponent
  ],
  providers: [],
})
export class TemplateFormsValidationModule { }
