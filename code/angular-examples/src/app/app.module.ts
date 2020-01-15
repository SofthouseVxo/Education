import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompBindingModule } from '../modules/4-Components/comp-binding.module';
import { CompStylingModule } from '../modules/4-Components-styling/comp-styling.module';
import { LifecycleHooksModule } from '../modules/4-ComponentsLifecycleHooks/lifecycle-hooks.module';
import { DirModule } from '../modules/5-Directives/dir.module';
import { ModModule } from 'src/modules/6-Modules/mod.module';
import { PipModule } from 'src/modules/7-Pipes/pip.module';
import { ServModule } from 'src/modules/8-Services/serv.module';
import { BRoutingModule } from 'src/modules/9-BasicRouting/b-routing.module';
import { ARoutingModule } from 'src/modules/9-AdvancedRouting/a-routing.module';
import { TemplateFormsModule } from 'src/modules/10-TemplateForms/template-forms.module';
import { TemplateFormsValidationModule } from 'src/modules/10-TemplateFormsValidation/template-forms-validation.module';
import { RctiveFormsModule } from 'src/modules/9-ReactiveForms/rctive-forms.module';
import { RctiveFormsValidationModule } from 'src/modules/9-ReactiveFormsValidation/rctive-forms-validation.module';
import { AngHttpModule } from 'src/modules/11-Http/ang-http.module';

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
