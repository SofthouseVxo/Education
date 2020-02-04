import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { TemplateComponent } from './template/template.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective,
    IfComponent,
    ForComponent,
    TemplateComponent,
    ClassComponent,
    StyleComponent,
    TwoWayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DirectivesComponent,
    HighlightDirective
  ],
  providers: []
})
export class DirectivesModule { }
