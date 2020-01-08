import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServRoutingModule } from './serv-routing.module';
import { ServComponent } from './serv.component';
import { ItemsService } from './items.service';
import { ItemComponent } from './item/item.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

@NgModule({
  declarations: [
    ServComponent,
    ItemComponent,
    AddButtonComponent,
    Screen1Component,
    Screen2Component
  ],
  imports: [
    BrowserModule,
    ServRoutingModule
  ],
  exports: [
    ServComponent
  ],
  providers: [ItemsService],
})
export class ServModule { }
