# React

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### A JavaScript library for building user interfaces.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### [Documentation](https://reactjs.org/)

### [Github](https://github.com/facebook/react)

### [Link to Reacts JavaScript level assumption](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## React is Developed and maintained by Facebook (initial release 2013)

* Apps built using React or React Native
  * Facebook
  * Netflix
  * Instagram
  * Dropbox
  * WhatsApp
  * Airbnb (styleguide, react-sketchapp)
  * Wix (wix-style-react)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Popular libraries in React projects

* [react-router](https://reacttraining.com/react-router/web/guides/quick-start) (ReactTraining)
* [redux](https://redux.js.org/) (react-redux) Handling global state
* [Axios](https://github.com/axios/axios)  Promise based HTTP client
* [Redux Form](https://redux-form.com/8.1.0/)  Handling forms with redux
* [React transition group](https://github.com/reactjs/react-transition-group) Handling animations and transitions
* [CSS modules](https://github.com/css-modules/css-modules) Encapsulatied Styling (webpack)
* [styled-components](https://github.com/styled-components/styled-components)  JSS
* [Enzyme](https://github.com/airbnb/enzyme) For additional testing utilities

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

> * Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
> * Build encapsulated components that manage their own state, then compose them to make complex UIs.
> * Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. - [React-Documentation](https://reactjs.org/)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## What is state?
* The data that defines the condition of some object or system.
* Examples of states.
  * The television is off.
  * The coffee is hot.
  * The clock is 14:15 am.
* Difference between a value and a variable
  * The number 42 does not have a state since you can’t change it.
  * So the number is a value

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Components
* In React, every piece of a UI is a component.
* Components can be composed together to create other components.
* The application itself is a component, it's a composition of components.
* Every component is a Class (or function) that you can instantiate. That means that your component can receive arguments that you can use to customize what’s shown in the application.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Rendering output

* All React components have some kind of return or render()  method.
* A component without a render() or return method is not a React component.
* The render() method returns a React element, which is its appearance.
* What it returns or renders is the output, a component must have an output.
* See this as a function, a component is something that returns an output based on input.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Virtual DOM

* React uses a concept called Virtual DOM.
* This Virtual DOM is **NOT** the same as the ordinary DOM.
* For every DOM object, there is a corresponding “virtual DOM object, and this virtual DOM object is a representation of a DOM object, like a lightweight copy.

<br/>

* The Virtual DOM selectively renders subtrees of nodes based upon state changes.
* It does the least amount of DOM manipulation possible in order to keep your components up to date.
* If there are any changes in the Virtual Dom then React performs a “diffing algorithm”. Which identifies what has changed and accordingly updates the real DOM. This means that it doesn’t update the entire DOM just the nodes that has changed.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## React compared to Angular
* React is a JavaScript library while Angular is a complete Framework
* React uses a Virtual DOM while Angular uses the regular DOM
* React uses JSX while Angular uses plain HTML
* React has one-way binding while Angular has two-way binding
* React is more commonly used with JavaScript while Angular with TypeScript
* React has a lower barrier when learning while Angular has a steep learning curve

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Simplest React example

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## create-react-app
Used to Create React apps with no build configuration.

You don’t need to install or configure tools like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

[react-scripts](https://www.npmjs.com/package/react-scripts)
<br/>
React-scripts includes scripts and configuration used by Create-react-app.
<br/>
[create-react-app Documentation](https://facebook.github.io/create-react-app/)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## A project created with create-react-app comes with:

* React, JSX, ES6, TypeScript and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A live development server that warns about common mistakes.
* A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
* An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
* Hassle-free updates for the above tools with a single dependency.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## A JavaScript build toolchain usually consists of:
* A package manager (Yarn, Npm)
* A bundler, (Webpack)
* A compiler (Babel)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Creating an project
* ```npx create-react-app my-app```

* npx is an an NPM package runner
* By default, npx will check whether ```<command>``` exists in ```$PATH```, or in the local project binaries, and execute that. If ```<command>``` is not found, it will be installed prior to execution.

*  You need to have atleast Node >= 6

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## Task: Create a new project with create-react-app and investigate it

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## create-react-app comes with the following scripts
* ```npm start```
* ```npm run test```
* ```npm run build```
* ```npm run eject```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## React developer tools
* Is an extension that you can install in your browser
* [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi), [Mozilla](https://addons.mozilla.org/sv-SE/firefox/addon/react-devtools/)
* In the extension you can investigate the virtual DOM, components state, props etc.

