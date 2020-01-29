import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompBindingModule } from '../modules/4-Components/comp-binding.module';
import { CompStylingModule } from '../modules/5-Components-styling/comp-styling.module';
import { LifecycleHooksModule } from '../modules/5-ComponentsLifecycleHooks/lifecycle-hooks.module';
import { DirModule } from '../modules/6-Directives/dir.module';
import { CompDynamicModule } from '../modules/4-Components-dynamic/comp-dynamic.module';
import { ModModule } from 'src/modules/7-Modules/mod.module';
import { PipModule } from 'src/modules/8-Pipes/pip.module';
import { ServModule } from 'src/modules/9-Services/serv.module';
import { BRoutingModule } from 'src/modules/10-BasicRouting/b-routing.module';
import { ARoutingModule } from 'src/modules/10-AdvancedRouting/a-routing.module';
import { TemplateFormsModule } from 'src/modules/11-TemplateForms/template-forms.module';
import { TemplateFormsValidationModule } from 'src/modules/11-TemplateFormsValidation/template-forms-validation.module';
import { RctiveFormsModule } from 'src/modules/11-ReactiveForms/rctive-forms.module';
import { RctiveFormsValidationModule } from 'src/modules/11-ReactiveFormsValidation/rctive-forms-validation.module';
import { AngHttpModule } from 'src/modules/12-Http/ang-http.module';
import { ElementsModule } from '../modules/13-Elements/elements.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompBindingModule,
    CompStylingModule,
    LifecycleHooksModule,
    CompDynamicModule,
    DirModule,
    ElementsModule,
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
