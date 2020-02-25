import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FilmSelectorComponent } from './film-selector/film-selector.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { SearcherComponent } from './searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmSelectorComponent,
    ShipCardComponent,
    SearcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
