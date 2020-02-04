import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompBindingModule } from '../modules/4-Components-binding/comp-binding.module';
import { CompStylingModule } from '../modules/5-Components-styling/comp-styling.module';
import { LifecycleHooksModule } from '../modules/5-ComponentsLifecycleHooks/lifecycle-hooks.module';
import { DirectivesModule } from '../modules/6-Directives/directives.module';
import { ModulesModule } from 'src/modules/7-Modules/modules.module';
import { PipesModule } from 'src/modules/8-Pipes/pipes.module';
import { ServicesModule } from 'src/modules/9-Services/services.module';
import { BasicRoutingModule } from 'src/modules/10-BasicRouting/basic-routing.module';
import { AdvancedRoutingModule } from 'src/modules/10-AdvancedRouting/advanced-routing.module';
import { TemplateFormsModule } from 'src/modules/11-TemplateForms/template-forms.module';
import { TemplateFormsValidationModule } from 'src/modules/11-TemplateFormsValidation/template-forms-validation.module';
import { CustomReactiveFormsModule } from 'src/modules/11-ReactiveForms/reactive-forms.module';
import { ReactiveFormsValidationModule } from 'src/modules/11-ReactiveFormsValidation/reactive-forms-validation.module';
import { AngHttpModule } from 'src/modules/12-Http/ang-http.module';
import { ElementsModule } from '../modules/13-Elements/elements.module';
import { CompDynamicModule } from '../modules/X-Components-dynamic/comp-dynamic.module';


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
    DirectivesModule,
    ElementsModule,
    ModulesModule,
    PipesModule,
    ServicesModule,
    BasicRoutingModule,
    AdvancedRoutingModule,
    TemplateFormsModule,
    TemplateFormsValidationModule,
    CustomReactiveFormsModule,
    ReactiveFormsValidationModule,
    AngHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
