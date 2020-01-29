import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngHttpRoutingModule } from './ang-http-routing.module';
import { AngHttpComponent } from './ang-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AngHttpComponent,
  ],
  imports: [
    BrowserModule,
    AngHttpRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AngHttpComponent
  ],
  providers: [],
})
export class AngHttpModule { }
