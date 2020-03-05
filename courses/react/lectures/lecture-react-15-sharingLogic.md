### 15. React
#### Sharing logic & Context
##### Higher Order Components (HOC's) & Render prop

---


#### Sharing state logic

* When we want to share code between components.
* But not using inheritance.

---

#### Three ways of doing this

* HOCs
* Render prop
* Hooks


####  Higher Order Component (HOC)
* Technique in React for reusing component logic.
* HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.
* A Higher-order component is a function that takes a component and returns a new component.

```JavaScript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

---

#### We can use HOC's when we have different components rendering different things but some implementation is the same.

---

####  HOC withSomeCoolItem
```JavaScript
// Takes one components (WrappedComponent)
function withSomeCoolItem(WrappedComponent, otherData) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
    const item = 12;
      // Notice that we pass through any additional props
      return <WrappedComponent item={item} {...this.props} />;
    }
  };
}
```


---

```JavaScript
// Takes one components (WrappedComponent)
function withSomeCoolItem(WrappedComponent, otherData) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      const coolItem = 'double rainbow';
      // Notice that we pass through any additional props
      return <WrappedComponent coolItem={coolItem} {...this.props} />;
    }
  };
}
```


---

####  Using the HOC
```JavaScript
class MyComponent extends Component {
  render() {
    return (
      <div>
        I got a cool item which is {this.props.coolItem}! // double rainbow
      </div>
    );
  }
}

export default withSomeCoolItem(MyComponent);
```


---

####  Passing unrelated Props
```JavaScript
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```


---

#### HOC's can be:

* Hocs can have its own state.
* Can pass in methods.
* Can pass in props {...this.props}
* Reflect upon withRouter.


---

#### HOC Examples

---

#### Render prop

* The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

* A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

---

#### Render prop example

1. The render prop is a function which returns a react element (in this case a component(child)).
1. The render prop functions takes an parameter and pass this to child.
1. This means that if we call prop.render('12'). Child will be rendered with '12' as data.
1. This way the logic in wrapper is shared between components that are passed as a render prop.

```JavaScript
return (
  <Wrapper render={data => {
    return <Child data={data}/>
  }}/>
)
```

#### Render prop example

App.js
```JavaScript
return (
  <Wrapper render={data => {
    return <Child data={data}/>
  }}/>
)
```

In Wrapper.js
```JavaScript
{this.props.render('12')}
```

In Child.js
```JavaScript
return (
  <div>
    <p>{props.data.name}</p>
    <p>{props.data.age}</p>
  </div>
)
```

---

####  Render Props examples on github

---

#### Context

---

#### Context

* Context is designed to share data that can be considered “global” for a tree of React components.
* Is a way to pass data through the component tree without having to pass props down manually at every level.
* Instead of Component →  props →  Component →  Props → Component
* Examples on what to place in context: Current authenticated user, UI Theme, Language
* **Always give it an extra thought before usage, since it makes component reuse more difficult.**

---

#### Context
<img style="width: 800px;" src="/media/react-images/react-15/context.png" alt="context">


---

####  Without Context
```HTML
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
return (
    <div>
    <ThemedButton theme={props.theme} />
  </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```


---

####  Using Context
```HTML
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    return <Button theme={this.context} />; // this.context is now dark
  }
}
```


---

```JavaScript
// Creates a new context with the default value of 'light', could be an object or whatever
React.createContext('light')

// Sets the context in a component tree, changes the context value
<Component ThemeContext.Provider value="dark" />

// Can be accessed inside a component deeper into the nested tree
static contextType = ThemeContext;

// And is now accessable in this.context
theme={this.context}
```

---

#### Context Examples
