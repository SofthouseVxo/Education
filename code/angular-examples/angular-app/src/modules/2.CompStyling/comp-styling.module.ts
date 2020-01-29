import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './comp-styling-routing.module';
import { CompStylingComponent } from './comp-styling.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    CompStylingComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CompStylingComponent
  ],
  providers: []
})
export class CompStylingModule { }
