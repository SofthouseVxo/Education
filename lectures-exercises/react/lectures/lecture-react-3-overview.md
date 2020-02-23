### 3. React
#### Overview

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

 #### React is a JavaScript library for building user interfaces.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
        

#### React

* <a href="https://reactjs.org/">Documentation</a>
* <a href="https://github.com/facebook/react">Github</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">Reacts JavaScript level assumption</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### React is Developed and maintained by Facebook (initial release 2013)

* Apps built using React or React Native
  * Facebook
  * Netflix
  * Instagram
  * Dropbox
  * WhatsApp
  * Airbnb (styleguide, react-sketchapp)
  * Wix (wix-style-react)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Popular libraries in React projects

* <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">react-router</a> - routing
* <a href="https://redux.js.org/" target="_blank">redux</a> - State management
* <a href="https://github.com/axios/axios" target="_blank">axios</a> - Promise based HTTP client
* <a href="https://redux-form.com/8.1.0/" target="_blank">redux-form</a> - Handling forms with redux
* <a href="https://github.com/reactjs/react-transition-group" target="_blank">react-transition-group</a> - Handling animations and transitions
* <a href="https://github.com/css-modules/css-modules" target="_blank">CSS Modules</a> - Encapsulatied Styling (webpack)
* <a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a> - JSS
* <a href="https://github.com/airbnb/enzyme" target="_blank">Enzyme</a> - For additional testing utilities

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### React

* Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* Build encapsulated components that manage their own state, then compose them to make complex UIs.
* Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. - <a href="https://reactjs.org/">React-Documentation</a></p>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What is state?

* The data that defines the condition of some object or system.
* Examples of states.
  * The television is off.
  * The coffee is hot.
  * The clock is 14:15 am.
* Difference between a value and a variable
  * The number 42 does not have a state since you can't change it.
  * The number is a value

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Components

* In React, every piece of a UI is a component.
* Components can be composed together to create other components.
* The application itself is a component, it's a composition of components.
* Every component is a Class (or function) that you can instantiate. That means that your component can receive arguments that you can use to customize what's shown in the application.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Rendering output
* All React components have some kind of return or ```render()``` method.
* A component without a ```render()``` or return method is not a React component.
* The ```render()``` method returns a React element, which is its appearance.
* What it returns or renders is the output, a component must have an output.
* See this as a function, a component is something that returns an output based on input.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Virtual DOM

* React uses a concept called Virtual DOM.
* This Virtual DOM is **NOT** the same as the ordinary DOM.
* For every DOM object, there is a corresponding “virtual DOM object, and this virtual DOM object is a representation of a DOM object, like a lightweight copy.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
        
#### Virtual DOM

* The Virtual DOM selectively renders subtrees of nodes based upon state changes.
* It does the least amount of DOM manipulation possible in order to keep your components up to date.
* If there are any changes in the Virtual Dom then React performs a “diffing algorithm". Which identifies what has changed and accordingly updates the real DOM. This means that it doesn't update the entire DOM just the nodes that has changed.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### React compared to Angular

* React is a JavaScript library while Angular is a complete Framework.
* React uses a Virtual DOM while Angular uses the regular DOM.
* React uses JSX while Angular uses plain HTML.
* React has one-way binding while Angular has two-way binding.
* React is more commonly used with JavaScript while Angular with TypeScript.
* React has a lower barrier when learning while Angular has a steep learning curve.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### A project created with create-react-app comes with:

* React, JSX, ES6, TypeScript and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don't need -webkit- or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### A project created with create-react-app comes with..

* A live development server that warns about common mistakes.
* A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
* An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
* Hassle-free updates for the above tolis with a single dependency.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### A JavaScript build toolchain example

* A package manager (Yarn, Npm)
* A bundler, (Webpack)
* A compiler (Babel)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Creating an project

* npx create-react-app my-app

* npx is an an NPM package runner

* You need to have atleast Node >= 6

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Create a new project with create-react-app and investigate it