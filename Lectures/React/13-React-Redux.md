# React & Redux

<br/>
<br/>
<br/>
<br/>

## Purpose of this lecture
* Redux is simple but not easy
* 1 day if often not enough
* Introduce redux
* Give basic understanding how you can handle global state
* Give basic understanding so you can learn on your own.

<br/>
<br/>
<br/>
<br/>

## Global state and local state
* Global state - Logged user, showPopup
* Local state - showButton, user

<br/>
<br/>
<br/>
<br/>

## Flux

Flux is the application architecture that Facebook uses for building client-side web applications.

![Alt text](./media/13/flux.png?raw=true "Title")

<br/>
<br/>
<br/>
<br/>

## Redux
### a predictable state container for JavaScript apps.

<br/>
<br/>
<br/>
<br/>

"If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features." [redux.js](https://redux.js.org/introduction/motivation)

<br/>
<br/>
<br/>
<br/>

### Redux
* Is standalone
* Works well with react
* Follows flux principles
* ```javascript npm install --save redux // non react project```
* ```javascript npm install --save redux react-redux // inside react project```