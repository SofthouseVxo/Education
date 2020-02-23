### 6. React
#### Elements & Components

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### React Elements

* Elements in React is not the same as ordinary HTML elements.
* Elements are the smallest building blocks of React apps.
* An element describes what you want to see on the screen.
* React elements a immutable -> You cannot change it after it has been created.
* It's like a frame in a movie, it represents the UI at a certain point in time.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Root DOM node
```HTML
<div id="root"></div> // In your index.html
```
```JavaScript
// In your you js file
// Everything in this root DOM node will be managed by React DOM
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Ticker example

* Inspect ticker application i browser
* Even though we describe the whole UI tree we only update the node that changed in the HTML.
* Every tick the React DOM's were compared and the UI was updated.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### React & Components

* Every piece of a UI is a component.
* Components can be composed together to create other components.
* The application itself is a component: a composition of components.
* Components let you split the UI into independent, reusable pieces.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Components

* React lets you define components as classes or functions.
* Components defined as classes currently provide more features.
* Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props") and return React elements describing what should appear on the screen.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  React Component defined as a function

* This function is a valid React component because it accepts a single “props" (Properties) argument with data.
* And returns a React element.
* Props is an object.
* These components are called “function components" because they are literally JavaScript functions.

```JavaScript
function Welcome(props) {
  return <h1>Hello</h1>;
}
```
```HTML
<Welcome/>  <!-- To create add in JSX -->
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  React Component defined as a class

* Every class component should have a ```render()``` method which returns the react element.
* Props end up in this.props.
* The ```render()``` gets called every time the components state updates.

```JavaScript
class Welcome extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Hello</h1>;
  }
}
```
```HTML
<Welcome/> <!-- To create add in JSX -->
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Everything passed as an attribute lands in props

```JavaScript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```JavaScript
<Welcome name={'John Doe'} />
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Everything passed as an attribute lands in props

```JavaScript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
```JavaScript
<Welcome name={'John Doe'} />
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Order things happen

* We call ReactDOM.render() with the ```<Welcome name="John doe" />``` element.
* React calls the Welcome component with ```{name: 'John doe'}``` as the props.
* Our Welcome component returns a ```<h1>Hello, John doe</h1>``` element as the result.
* React DOM efficiently updates the DOM to match ```<h1>Hello, John doe</h1>```.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Everything inside closing tag ends up in props.children

```JavaScript
<MyFirstComponent>
  <p>Hello</p>
<MyFirstComponent/>
```
```JavaScript
function MyFirstComponent(props, children) {
  return children;
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

####  Composing Components

```JavaScript
function CompA() {
  return (
    <CompX>
      <CompB/>
      <CompC/>
    </CompX>
  );
}
```

```JavaScript
function CompX(props) {
  return (
    <div className="some-class">
      {props.children} // CompB & CompC
    </div>
  );
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

<img style="width: 700px;" src="/media/react-images/react-6/composing.png" alt="lifecycle methods">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Composing Components

* Components can refer to other components in their output. 
* This lets us use the same component abstraction for any level of detail. 
* A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

```HTML
<Dialog>
  <HeaderComponent text="My dialog header text">
  <ContentComponent text="My dialog content text">
</Dialog>
```

```JavaScript
function Dialog(props) {
  return (
    <div className="dialog-background">
      <div className="dialog">
        {props.children}
      </div>
    </div>
  );
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

#### So What About Inheritance?
"At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.
</br></br>
Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.
</br></br>
If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it." - <a href="https://reactjs.org/docs/composition-vs-inheritance.html" target="_blank">React Docs</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Props are read only

* It must never modify its own props.
* All React components must act like pure functions with respect to their props.

```JavaScript
function sum(a, b) {return a + b;}
function withdraw(account, amount) {account.total -= amount;}
```