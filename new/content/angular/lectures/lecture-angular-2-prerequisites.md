
### 2. Angular
##### Prerequisites
---


#### Single Page vs Multi page applications
---

#### What is a Multi page web site/application

* A MPA consists of multiple html pages.
* Example -><a href="https://www.blocket.se">https://www.blocket.se</a>.
* Web page reloads when page change (scroll example).
* For example when a html form is submitted to server. Then a new page is returned from the server and loaded in the browser.

---

#### Cons - multi page applications

* Updating a website can be more timeconsuming, need to update all sites.
* If there is a lot of content on each page, this will result in long loading times.
* It is harder to adapt to mobile, since mobiles have less screen sizes, then there is more scrolling and reloading a page when scrolled to the bottom will result in the user being thrown to the top again.

---

#### Single Page website/Application (SPA)

* Consists of a single html page (Gmail, Netflix).
* This page is loaded once.
* Usually no need to render pages on server side.
* Easier to debug.
* Cache local storage effectively. Works offline with correct setup.

---

#### Cons - Single page applications

* SEO optimization is tricky (indexing pages).
* Can be slow to download due to loading frameworks and libs all at once.
* Requires Javascript to be enabled.
* Can be less secure (Cross site scripting) if implemented carelessly.

---

#### Libraries & Frameworks

---

#### What is a library?

* Could be a library of Pre-written JavaScript.
* Purpose is to help out with specific areas or tasks.
* Results in easier development.
* Examples -> Moment.js, Redux, Jquery

---

#### What is a framework?

* Consistent starting point & Organizational structure (important for large applications).
* Web frameworks -> standard way to build and deploy web applications.
* Frameworks often use different libraries.
* Web frameworks -> database access, templating, session management and code reuse.

---

#### Why use a Framework?

* Saves time.
* Code reuse.
* Consistent structure.
* Community.
* Maintenance.

---

#### Framework vs library metaphor
"A **library** is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a>
"A **framework**, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a>

---
  
#### Different frontend Libraries/frameworks
---


#### Angular vs React vs Vue

* Angular & Vue are frameworks
* React is a library, third party modules -> framework
* Solves the same problems, a bit different
* <a href="https://insights.stackoverflow.com/survey/2019">Usage 2019</a>

---

#### Which one to choose?

* If you start working at a company you will probably not be the one deciding when you start.
* Learn one and others will be easier to master.
* It is very complex and expensive to port a platform to a different framework. (that's why a lot of companies use older frameworks and versions).
* Different parts of an application can be using different tools.

---

#### Model-View-Controller (MVC)
  
* Is an architecture that separates information handling & visualisation.
* Data models, views & controls.
  
---
  

#### MVC
<img style="width: 800px;" src="/media/mvc.png" alt="mvc overview">
  
---
  

#### Model:
  
* Represents shape of the data and business logic.
* Maintains the data of the application.
* Model objects retrieve and store model state in a database.
  
---
  
#### View:
  
* The user inteface
* It displays data using the model to the user.
* Make it possible for the user to modilfy the data.
  
---
  
#### Controller:
  
* Handles the user request
* A user interacts with the **View** which raises appropriate URL request.
* It is the **Controller** that handles the request.
* And then renders the appropriate view with the model data as a response.
  
---

#### Node.js & Npm
---


#### Node.js
  
* Node.js is a JavaScript runtime environment
* Makes it possible to run JavaScript your machine as a standalone application.
* Machine can be your computer or a server.
* Runs on V8 JavaScript runtime engine.
* The engine takes your JavaScript code and converts it into a faster machine code. 
* <a href="https://nodejs.org/en/docs/">Documentation</a>
  
---


#### Install Node.js
  
* To use need Node you need to download and install it on a machine first.
* <a href="https://nodejs.org/en/" target="_blank">Download</a> (LTS = Long Term Support)
  
---


####  Check if installed properly

```
$ node -v
$ npm -v
$ npm install npm@latest -g
```

---

#### Npm
#### Node Package Manager
##### <a href="https://www.npmjs.com/">Web page</a>

---

"NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use.The NPM program is installed on your computer when you install Node.js" - <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp">W3Schools</a>

---


#### Npm
  
* Takes care of your node modules
* Handles which modules are dependent on which
* Imports modules in correct order
  
---

####  Basic npm commands

```javascript
$ npm -v  // shows you npm version
$ npm init  // initializes a new npm project
$ npm install <module> // installs a node module
$ npm install --save <module>  // installs a node module and saves it as a dependency -> package.json
$ npm install --save-dev <module>  // installs a node module and saves it as a dev dependency -> package.json
```

---

####  Basic npm commands

```javascript
$ npm i bootstrap@4.0.0 --save // installs the 4.0.0 version of bootstrap
$ npm i typescript --save-dev // installs typescript and since typescript is only needed in the development phase we set -dev
```

---

#### Semantic versioning
<img src="/media/angular-images/angular-2/semantic.png" alt="semantic versioning">

---
  
* package.json - is a JSON file containing which modules that are needed in your project along with other information
* /node_modules - folder where your modules are stored
  
---

#### But why not CDN?
  
* What if the code fetched from the link changes?
* Easier to see the code when using Npm
* Using a CDN means another request to the server, you might have multiple.
  
---


#### npm
  
* You can create your own npm package and host on npm.js
* Download other packages
* Every package/module gets its own npm page, with a read me and GitHub link, + additional information about the package moment.js
  
---


#### npm - tips
  
* Do not use modules for everything.
* <a href="https://www.npmjs.com/package/is-odd">is-odd</a>, <a href="https://www.npmjs.com/package/is-even">is-even</a>
* Most modules have dependencies, and need to be maintained.
  
---

#### Webpack

---


#### Webpack
  
* Is a module bundler
* Takes all your javascript modules and builds the project.
* Import - Export
* <a href="https://webpack.js.org/">Documentation</a>
  
---


#### Typescript
---


#### TypeScript
  
* TypeScript is a typed superset of JavaScript.
* Developed and maintained by Microsoft.
* Compiles to plain JavaScript.
* Support annotations, interfaces, Classes, Decorators etc.
* <a href="https://www.typescriptlang.org/" target="_blank">Documentation</a>
  
---

#### Typed language

In typed language we define the type of all variables which are known at either compile time or runtime.

---

####  Getting started TypeScript

```
$ npm install -g typescript
$ mkdir tscproj
$ cd tscproj
$ touch index.ts
$ tsc index.ts
```

---

#### Examples
  
* Annotations
* Let & Const
* Interfaces
* Functions
* Classes
* Decorators
  
#### <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank">Types</a>
