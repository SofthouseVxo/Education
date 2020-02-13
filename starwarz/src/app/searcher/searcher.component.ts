import { Component, OnInit } from '@angular/core';

import { JsonHttpGatewayService } from '../json-http-gateway.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  name: string = '';
  starShips = [];
  submitted = false;

  constructor(public jsonHttpGatewayService: JsonHttpGatewayService){

  }

  onSubmit() {
    this.jsonHttpGatewayService.getJSON('https://swapi.co/api/people?search='+ this.name)
    .then(json => {
       this.starShips = [];
        json.results[0].starships.forEach(ship => {
          this.jsonHttpGatewayService.getJSON(ship)
            .then(json => {
              this.starShips.push(json);
              this.submitted = true;
            })
        });
    })
    
   
  }

  ngOnInit(){

  }

  clearForm(){
   this.starShips = [];
   this.name = '';
   this.submitted = false;
  }

}