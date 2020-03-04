### 13. React
#### Basic Hooks

---

#### Hooks

* Hooks are something that let you write Functional Components and still hook into class-based features and use them.

---

#### What was missing in functional components before?

---

#### What was missing in functional components before?

* State
* Lifecycle methods

---

#### Hooks

* A Hook is a special function that lets you “hook into” React features. 
* For example the ```useState``` hook lets you add React state to function components.
* Hooks don't work inside classes — they let you use React without classes.
* <a href="https://reactjs.org/docs/hooks-intro.html#motivation" target="_blank">React Motivation</a>


---

#### According to React

* But do we need classes then?
* There are no plans to remove classes from React.
* Hooks don't replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.


---

####  useState
```JavaScript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  // setCount is the function to update the state
  // 0 is the initial value
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```


---

#### Effect Hook - useEffect

* The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
* It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
* The function passed to useEffect will run after the render is committed to the screen.


---

####  useEffect
```JavaScript
export default function MyComponent(props) {
  const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      console.log('user Effect runs');
    });

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
```


---

####  useEffect unmounting
```JavaScript
export default function MyComponent(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('user Effect runs');
    // adding a return which works like componentWillUnmount
    return () => console.log('unmounting...');
  },[]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```


---

####  useEffect only once
```JavaScript
  export default function MyComponent(props) {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      console.log('user Effect runs');
    }, []);
    // Adding above to only run once (componentDidMount)

    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
```


---

#### Hooks are JavaScript functions but consider

* Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
* Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions.


---

#### More Hooks

* useContext
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue
* <a href="https://reactjs.org/docs/hooks-reference.html" target="_blank">Api Reference</a>

---

* Completely opt-in. You can try Hooks in a few components without rewriting any existing code. But you don't have to learn or use Hooks right now if you don't want to.
* 100% backwards-compatible. Hooks don't contain any breaking changes.
* Available with the release of v16.8.0 (12 months ago).