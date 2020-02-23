### 15. React
#### Higher Order Components (HOC's), Context & PropTypes

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Higher Order Component (HOC)
* Technique in React for reusing component logic.
* HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.
* A Higher-order component is a function that takes a component and returns a new component.

```JavaScript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### We can use HOC's when we have different components rendering different things but some implementation is the same.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HOC's can be:

* Hocs can have its own state.
* Can pass in methods.
* Can pass in props {...this.props}
* Reflect upon withRouter.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HOC Examples

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Context

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Context

* Context is designed to share data that can be considered “global” for a tree of React components.
* Is a way to pass data through the component tree without having to pass props down manually at every level.
* Instead of Component →  props →  Component →  Props → Component
* Examples on what to place in context: Current authenticated user, UI Theme, Language
* <u>Always give it an extra thought before usage, since it makes component reuse more difficult.</u>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Context
<img style="width: 800px;" src="/media/react-images/react-15/context.png" alt="context">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

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

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Context Examples

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
  
#### PropTypes
* Typechecking Proptypes.
* Setting up what kind of props is can be passed in.
* https://www.npmjs.com/package/prop-types

```
npm install --save prop-types
```

comes with create-react-app
  
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  PropTypes function component
```JavaScript
import PropTypes from 'prop-types';

function MyComponent(props) {
  render() {
    return (
      <h1>Hello, {props.name}</h1>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string // throws a warning if name is not a string
};
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  PropTypes class component
```JavaScript
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

MyComponent.propTypes = {
  name: PropTypes.string // throws a warning if name is not a string
};
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  PropTypes class component using static keyword

```JavaScript
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string // throws a warning if name is not a string
  }

  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
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

####  PropTypes

```JavaScript
MyComponent.propTypes = {
  name: PropTypes.string
};

// will display a warning if name is not passed as props
MyComponent.propTypes = {
  name: PropTypes.string.isRequired
};
```