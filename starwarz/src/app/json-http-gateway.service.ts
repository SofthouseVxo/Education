import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonHttpGatewayService {

  BASE_URL:string = 'https://swapi.co/api/';

  constructor() { 

  }

  getJSON(url){
    return fetch(url)
      .then(function(response) {
        return response.json()
      })
  }
}
