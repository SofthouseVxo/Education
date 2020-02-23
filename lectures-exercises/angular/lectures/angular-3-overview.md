### 3. Angular</h3>
##### Overview</h5>

---


#### What is Angular?

* A framework for building (SPA) client applications.
* Angular is written in TypeScript.
* HTML, (CSS) & Typescript is used to create Angular applications.
---


#### What do we get from using Angular?

* A clean structure.
* Re-usable code.
* More testable code.
* Cross platform.
* Speed and performance.

---

#### Angular versions

* AngularJS <— big difference
* Angular 2 (2016)
* 5,6,7 and now <a href="https://angular.io/" target="_blank">Angular 8 (May, 2019)</a>

---


#### Angular building blocks
<img src="new/media/angular-images/angular-3/blocks.png" alt="Angular building blocks">

---

#### Angular Modules (NgModule)

* Bundles functionalities of our app (collects related code into a functional set).
* Usually a group of related components and/or services.
* Every Angular app is defined by a set of NgModules and always has at least a root module.
* Examples of different modules inside an app: Admin, Users, Authentication
* NgModule, HttpClientModule, FormsModule, BrowserModule -> Angular modules
* <a href="https://angular.io/guide/architecture-modules" target="_blank">Documentation</a>

---

#### Components

* Components define views. 
* A view is a set of screen elements.
* Angular can modify these elements according to your program logic and data.
* An Angular application consists of multiple components.
* Angular Components are TypeScript Classes.

---

#### Components
<img src="/media/angular-images/angular-3/components.png" alt="components">

---

#### Components
<img src="/media/angular-images/angular-3/components2.png" alt="components">

---

#### Components
<img src="/media/angular-images/angular-3/component3.png" alt="components tree">

---

#### Components
<img src="/media/angular-images/angular-3/componentTree.png" alt="components tree">

---


#### Services

* Typically a class.
* Logic not related to a specific view.
* Services can be injected into Components.
* Examples of functionality in services can be: Fetch and handle data, store user example.
* <a href="https://angular.io/guide/architecture-services" target="_blank">Documentation</a>

---

#### Overview
<img style="width: 800px" src="/media/angular-images/angular-3/angularoverview.png" alt="angular overview">

---

#### Angular Router

* The Angular Router is a NgModule
* It that enables navigation from one view (components) to the next as users perform application tasks.
* In other words it decides which components to show.
* The url/address field will update as usual.
* The user will not notice that the app is single page.
---

#### Group Exercise

* Find a web application (Ping pong, gmail, google drive).
* Divide application into Components, Services and Modules.
* Draw, print screen etc.

---


#### Hints

* See components as views.
* Services contain logic not related to a specific view.
* Can you chunk logic (components & services) in a module? And reuse in another application?

---

#### Angular CLI

* Is a command line interface for creating angular applications.
* It makes it easy to create an application that already works, right out of the box.
* Which follows best practices!
* With it you can generate components, routes, services and pipes with simple commands.
* And makes it easy to test your app locally while developing.
---

####  Angular CLI

* Angular CLI commands always starts with ng 
* Complete list of commands: [https://angular.io/cli](https://angular.io/cli)
* [https://cli.angular.io/](https://cli.angular.io/)
				
```javascript
$ npm install -g @angular/cli
```

---
				
#### Create a new Angular app with Angular CLI

```javascript
$ ng new my-dream-app
$ cd my-dream-app
$ ng serve
```
---

#### Project structure
<img  src="/media/angular-images/angular-3/proj.png" alt="project structure">

---

#### Inspect:

* vendor.js - third party libs
* main.js - our code
* Build folder
* angular.json
* eslint
* sourcemap
* polyfills
* ts files
---

#### How angular apps starts
<img src="/media/angular-images/angular-3/angularstart.png" alt="angular bootstrap">

---

#### Augury

* Extension Chrome and Firefox
* <a href="https://augury.rangle.io/" target="_blank">Website</a>