import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompStylingComponent } from './comp-styling.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MetaStylesComponent } from './meta-styles/meta-styles.component';
import { HostStylesComponent } from './host-styles/host-styles.component';

@NgModule({
  declarations: [
    CompStylingComponent,
    ListComponent,
    ListItemComponent,
    MetaStylesComponent,
    HostStylesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompStylingComponent
  ],
  providers: []
})
export class CompStylingModule { }
