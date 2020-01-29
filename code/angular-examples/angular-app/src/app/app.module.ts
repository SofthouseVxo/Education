import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompBindingModule } from '../modules/1.CompBinding/comp-binding.module';
import { CompStylingModule } from '../modules/2.CompStyling/comp-styling.module';
import { LifecycleHooksModule } from '../modules/3.LifecycleHooks/lifecycle-hooks.module';
import { DirModule } from '../modules/4.Directives/dir.module';
import { ModModule } from 'src/modules/5.Modules/mod.module';
import { PipModule } from 'src/modules/6.Pipes/pip.module';
import { ServModule } from 'src/modules/7.Services/serv.module';
import { BRoutingModule } from 'src/modules/8.1BasicRouting/b-routing.module';
import { ARoutingModule } from 'src/modules/8.2AdvancedRouting/a-routing.module';
import { TemplateFormsModule } from 'src/modules/9.1TemplateForms/template-forms.module';
import { TemplateFormsValidationModule } from 'src/modules/9.2TemplateFormsValidation/template-forms-validation.module';
import { RctiveFormsModule } from 'src/modules/9.3ReactiveForms/rctive-forms.module';
import { RctiveFormsValidationModule } from 'src/modules/9.4ReactiveFormsValidation/rctive-forms-validation.module';
import { AngHttpModule } from 'src/modules/10.Http/ang-http.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompBindingModule,
    CompStylingModule,
    LifecycleHooksModule,
    DirModule,
    ModModule,
    PipModule,
    ServModule,
    BRoutingModule,
    ARoutingModule,
    TemplateFormsModule,
    TemplateFormsValidationModule,
    RctiveFormsModule,
    RctiveFormsValidationModule,
    AngHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
