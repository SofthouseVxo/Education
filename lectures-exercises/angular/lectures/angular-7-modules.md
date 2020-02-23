### 7. Angular</h3>
##### Modules</h5>

---

#### <a href="/public/lectures/javascript/javascript-22-prototypesModules.html" target="_blank">JavaScript Lecture on Modules</a>

---


#### JavaScript Modules

* Could be describes as small units of independent, encapsulated, reusable code.
* A JavaScript module is just a file. One script is one module.
* Modules can:
  * Load each other.
  * Call functions of one module from another one.

---

#### Angular modules (NgModules)

* Angular apps are modular.
* Angular has its own modularity system and its called NgModules.
* These modules are containers for a cohesive block of code dedicated to:
  * an application domain.
  * a workflow.
  * or a closely related set of capabilities.
	
* Dividing an application in a modules are a way of bundling functionalities of our app.
* Examples could be: Admin, User, Authentication.

---

#### NgModules

* An module can contain:
  * Components
  * Service providers
  * Other related codefiles
	
* Modules can:
  * import functionality that is exported from other NgModules.
  * export selected functionality for use by other NgModules.

---

#### NgModules

* We access angular's functionality by importing NgModules.
* And we have done it already:

```JavaScript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
```

---

#### NgModule

* Declarations: Components, directives, pipes
* Exports: Declarations used in other NgModules
* Imports: Other modules exported classes needed in this NgModule
* Providers: Services
* Bootstrap: Main application view (root component)

---
				
####  NgModule - simple root NgModule definition.

```JavaScript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	imports:      [ BrowserModule ],
	providers:    [ Logger ],
	declarations: [ AppComponent ],
	exports:      [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
	```


---

#### NgModule
* declarations: Components, directives, and pipes that belong to this NgModule.
* exports: Declarations that should be visible and usable in the component templates of other NgModules.
* imports: Modules whose exported classes are needed by component templates declared in this NgModule.
* providers: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app.
* bootstrap: The main application view, called the root component, which hosts all other app views. (Only the root NgModule should set the bootstrap property).

---

#### <a href="https://angular.io/guide/feature-modules" target="_blank">Feature modules vs Root modules</a>

---


#### Frequently Used Modules
<img src="/media/angular-images/angular-7/frequent-modules.png" alt="Frequently Used Modules">

---


#### Entry components
* An entry component is any component that Angular loads imperatively (not by referencing it in the template)
* You specify an entry component by bootstrapping it in an NgModule, or including it in a routing definition.

* Bootstrapped root component.
* A component you specify in a route definition.

---

