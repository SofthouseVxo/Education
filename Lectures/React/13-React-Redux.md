# React & Redux

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

## Purpose of this lecture
The purpose of thie lecture is to give an introduction to redux and handling global state. Redux is simple but not easy, and it will take more than a day to grasp the concept and be ready to work with redux.

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

## Global state and local state
* Global state
  * State in the whole app
  * logged user, showPopup
* Local state
  * State inside a component
  * showButton, user

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

## State could be
* Server response
* Cached data
* Locally created data that has not yet been persisted to the server.
* Active routes
* Selected tabs
* Spinners
* Pagination controls
* and so on.

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

## Flux

Flux is the application architecture that Facebook uses for building client-side web applications.

![Alt text](./media/13/flux.png?raw=true)

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

## Redux
### Is a predictable state container for JavaScript apps.

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

>
"If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features." - [redux.js](https://redux.js.org/introduction/motivation)

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

### Redux
* Is standalone
* Works well with react
* Follows flux principles
```JavaScript
npm install --save redux // non react project
```
```JavaScript
npm install --save redux react-redux // inside react project
```

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

## Redux devtools
[Chrome Download](https://chrome.google.com/webstore/detail/redux-devtools)
[Mozilla Download](https://addons.mozilla.org/sv-SE/firefox/addon/reduxdevtools/)

Needs to be added in your react application
```JavaScript
const store = createStore(
 reducer, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

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

**Actions** are payloads of information that send data from your application to your store.
**Reducers** specify how the application's state changes in response to actions sent to the store.
The **Store** is where the state is stored

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

## Redux + React

![Alt text](./media/13/React+Redux.png?raw=true)

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

## State machine

![Alt text](./media/13/StateMachine.png?raw=true)

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

## Principles

* **Single source of truth** The state of your whole application is stored in an object tree within a single store.
A single state tree also makes it easier to debug or inspect an application.

* **State is read-only** The only way to change the state is to emit an action, an object describing what happened.

* **Changes are made with pure functions** To specify how the state tree is transformed by actions, you write pure reducers.
Reducers are just pure functions that take the previous state and an action, and return the next state.

* We do **not** mutate state, we create new states and this is done **synchronous**

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

## Examples

