import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DirRoutingModule } from './dir-routing.module';
import { DirComponent } from './dir.component';
import { HighlightDirective } from './highlight.directive';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { TemplateComponent } from './template/template.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    DirComponent,
    HighlightDirective,
    IfComponent,
    ForComponent,
    TemplateComponent,
    ClassComponent,
    StyleComponent,
  ],
  imports: [
    BrowserModule,
    DirRoutingModule
  ],
  exports: [
    DirComponent,
    HighlightDirective
  ],
  providers: []
})
export class DirModule { }
