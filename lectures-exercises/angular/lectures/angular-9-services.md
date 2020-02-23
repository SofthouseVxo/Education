### 9. Angular</h3>
#### Services</h5>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

"Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well." - <a href="https://angular.io/guide/architecture-services" target="_blank">Angular Docs</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

--- 

#### Services

* Angular distinguishes components from services to increase modularity and reusability.
* Components -> view-related functionality.
* A component can delegate certain tasks to services: 
  * Fetching data from the server.
  * Validating user input.
  * Logging directly to the console.
* Service classes can be injected and available in any component.

<img src="/media/angular-images/angular-9/services2.png" alt="services">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---


#### Services can:
			
* Share information among classes that don't know each other.
* Be injected into multiple places.
* Store global state, public and private.
	
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Dependency injection
<img style="width: 800px" src="/media/angular-images/angular-9/services.png" alt="services">
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---


#### Service example
<img style="width: 800px" src="/media/angular-images/angular-9/services3.png" alt="services">
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---


#### Dependecy injection
"DI is wired into the Angular framework and used everywhere to provide new components with the services or other things they need. Components consume services; that is, you can inject a service into a component, giving the component access to that service class." - <a href="https://angular.io/guide/architecture-services">Angular Docs</a>

"Dependencies are services or objects that a class needs to perform its function. DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself."  - <a href="https://angular.io/guide/architecture-services">Angular Docs</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Simple logger service

```JavaScript
export class LoggerService {
	log(msg: any)   { console.log(msg); }
	error(msg: any) { console.error(msg); }
	warn(msg: any)  { console.warn(msg); }
}
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

--- 

#### Simple logger service

* The ```@Injectable()``` decorator identifies a service class. 
* The providedIn property configures a specific ModuleInjector, here root, which makes the service available in the root ModuleInjector (everywhere in the app).

```JavaScript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // <--provides this service in the root ModuleInjector
})

export class LoggerService {
	log(msg: any)   { console.log(msg); }
	error(msg: any) { console.error(msg); }
	warn(msg: any)  { console.warn(msg); }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Simple logger service

```JavaScript
export class LoggerService {
	log(msg: any)   { console.log(msg); }
	error(msg: any) { console.error(msg); }
	warn(msg: any)  { console.warn(msg); }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Consuming a service

```JavaScript
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-log',
  templateUrl: '<button (click)="logSomething()">Log something</button>'
})

export class ItemComponent {

  constructor(private loggerService: LoggerService) {
  }

  logSomething() : void {
    this.loggerService.log('hello world!');
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Consuming a service

```JavaScript
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-log',
	templateUrl: '<button (click)="logSomething()">Log something</button>',
  providers: [LoggerService] // Creates a new instance of the service
})

export class ItemComponent {
  constructor(private loggerService: LoggerService) {
  }

  logSomething() : void {
    this.loggerService.log('hello world!');
  }
}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---