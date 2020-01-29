import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  serviceValue:number = 12;
  
  constructor() { }
}
