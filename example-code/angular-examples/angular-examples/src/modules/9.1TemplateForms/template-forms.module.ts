import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TemplateFormsComponent }  from './template-forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    TemplateFormsComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    TemplateFormsComponent
  ],
  providers: [],
})
export class TemplateFormsModule { }
