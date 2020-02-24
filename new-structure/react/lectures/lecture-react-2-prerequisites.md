### 2. React
#### Prerequisites


---

#### Single Page & Multi page applications


---

#### Multi page website/application

* Consists of multiple html pages <a href="https://www.blocket.se">https://www.blocket.se</a>
* Page reloads when page change (scroll example).
* For example when a html form is submitted to server. Then a new page is returned from the server and loaded in the browser.


---
	
#### Cons - multi page applications

* Updating a website can be more timeconsuming, need to update all sites.
* If there is a lot of content on each page, this will result in long loading times.
* It is harder to adapt to mobile, since mobiles have less screen sizes, then there is more scrolling and reloading a page when scrolled to the bottom will result in the user being thrown to the top again.



---
	
#### Single Page website/Application (SPA)

* Consists of a single html page (Gmail, Netflix).
* It only gets loaded once, no page loading.
* Usually no need to render pages on server side.
* It is easier to debug.
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

* Library of Pre-written JavaScript.
* Purpose is to help out with specific areas or tasks.
* Results in easier development.
* Examples -> Moment.js, Redux, Jquery.


---

"Jquery - It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers." - Jquery Documentation


---

#### What is a framework?

* Consistent starting point & Organizational structure (important for large applications)
* Web frameworks -> standard way to build and deploy web applications
* Frameworks often use different libraries
* Web frameworks -> database access, templating, session management and code reuse.


---
	
#### Why use a Framework?

* Time
* Reusing code
* Consistent structure
* Community
* Maintenance


---
	

#### Framework vs library metaphor
"A **library** is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a>
"A **framework**, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input." - <a href="https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/">Freecodecamp, 2019</a>


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

#### Node.js & Npm


---

### Node.js

<a href="https://nodejs.org/en/">Documentation</a>


---
#### Node.js

* Runs Javascript on your local machine and on server
* Uses v8 engine
* Node compiles JavaScript code into native code


---

#### Test it

```Shell
$ node -v
$ npm -v
$ npm install npm@latest -g
Open in terminal and test
```


---
	
### Npm
#### Node Package Manager
#### <a href="https://www.npmjs.com/">Web page</a>


---

"NPM is a package manager for Node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use.The NPM program is installed on your computer when you install Node.js" - <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp">W3Schools</a>


---

### Npm

* Takes care of your node modules
* Handles which modules are dependent on which
* Imports modules in correct order


---
	
### Basic Npm commands

```Shell
npm init
npm install
npm install --save -dev
npm -v
```


---
	

### Semantic versioning
<img src="/new-structure/media/general-images/general-3/semantic.png" alt="semantic versioning">


---

* package.json - is a JSON file containing which modules that are needed in your project along with other information
* /node_modules - folder where your modules are stored


---
	

### But why not CDN?

* What if the code fetched from the link changes?
* Easier to see the code when using Npm
* Using a CDN means another request to the server, you might have multiple.


---

### npm

* You can create your own npm package and host on npm.js.
* Download other packages.
* Every package/module gets its own npm page, with a read me and GitHub link, + additional information about the package moment.js.


---	

### npm - tips

* Do not use modules for everything.
* <a href="https://www.npmjs.com/package/is-odd">is-odd</a>, <a href="https://www.npmjs.com/package/is-even">is-even</a>
* Most modules have dependencies, and need to be maintained.


---
	
### Webpack


---

### Webpack

* Is a module bundler.
* Takes all your javascript modules and builds the project.
* Import - Export.
* <a href="https://webpack.js.org/">Documentation</a>


---

#### create-react-app


---

#### create-react-app

* Used to Create React apps with no build configuration.
* You don't need to install or configure tolis like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.
* <a href="https://www.npmjs.com/package/react-scripts">react-scripts</a>
* React-scripts includes scripts and configuration used by Create-react-app.
* <a href="https://facebook.github.io/create-react-app/">create-react-app Documentation</a>


---

#### create-react-app scripts

```
$ npm start
$ npm run test
$ npm run build
$ npm run eject
```


---
				
#### npx

* NPM package runner.
* npx makes it easy to use CLI tools and other executables hosted on the registry.
* Calling npx <command> when <command> isn’t already in your $PATH will automatically install a package with that name from the NPM registry for you, and invoke it. When it’s done, the installed package won’t be anywhere in your globals, so you won’t have to worry about pollution in the long-term. - <a href="https://www.bram.us/2017/07/15/introducing-npx-an-npm-package-runner/" target="_blank">Bram.us</a>


---
        

#### React developer tools

* Is an extension that you can install in your browser
* <a href="https://chrome.google.com/webstore/detail/react-developer-tolis/fmkadmapgofadopljbjfkapdkoienihi">Chrome</a>
* <a href="https://addons.mozilla.org/sv-SE/firefox/addon/react-devtolis/">Mozilla</a>
* In the extension you can investigate the virtual DOM, components state, props etc.