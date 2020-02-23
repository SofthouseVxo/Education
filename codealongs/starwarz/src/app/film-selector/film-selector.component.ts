import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

import { JsonHttpGatewayService } from '../json-http-gateway.service';

import StarShip from '../starship.model';

@Component({
  selector: 'app-film-selector',
  templateUrl: './film-selector.component.html',
  styleUrls: ['./film-selector.component.css']
})
export class FilmSelectorComponent implements OnInit {

  filmTitles:string[] = [];
  filmObjects;
  activeFilm;
  starShips:StarShip[] = [];
  selectedFilm:string;

  constructor(public jsonHttpGatewayService: JsonHttpGatewayService){

  }

  onSubmit() {
    this.activeFilm = this.filmObjects.find(film => film.title == this.selectedFilm )
    
    this.starShips = [];
    this.activeFilm.starships.forEach(ship => {
      this.jsonHttpGatewayService.getJSON(ship)
        .then(json => {
          this.starShips.push(json);
        })
    });
  }

  ngOnInit(){
    this.jsonHttpGatewayService.getJSON('https://swapi.co/api/films')
      .then(json => {
        console.log(json);

        this.filmTitles = json.results.map(film => film.title);
        this.filmObjects = json.results;

        console.log(this.filmTitles);
      })
  }

  clearForm(){
    this.selectedFilm = '';
    this.activeFilm = null;
    this.starShips = [];
  }

  logChange(){
    console.log(this.selectedFilm);
  }

}
