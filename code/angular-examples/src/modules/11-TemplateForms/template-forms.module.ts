import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TemplateFormsComponent }  from './template-forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    TemplateFormsComponent,
    SimpleFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TemplateFormsComponent
  ],
  providers: [],
})
export class TemplateFormsModule { }
