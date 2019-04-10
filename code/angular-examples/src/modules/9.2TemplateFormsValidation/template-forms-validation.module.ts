import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TemplateFormsValidationComponent }  from './template-forms-validation.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({

  declarations: [
    TemplateFormsValidationComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TemplateFormsValidationComponent
  ],
  providers: [],
})
export class TemplateFormsValidationModule { }
