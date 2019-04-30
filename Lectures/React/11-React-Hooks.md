# React Hooks basics
React version 16.8.0

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

* Completely opt-in. You can try Hooks in a few components without rewriting any existing code. But you don't have to learn or use Hooks right now if you don't want to.
* 100% backwards-compatible. Hooks don't contain any breaking changes.
* Available with the release of v16.8.0. (1 month ago)

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

## Hooks
* Hooks let you use state and other React features without writing a class.
* Hooks don't work inside classes — they let you use React without classes.
* [React Motivation](https://reactjs.org/docs/hooks-intro.html#motivation)

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

## useState
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

## Effect Hook - useEffect

* The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
* It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes,
* The function passed to useEffect will run after the render is committed to the screen.

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

## useEffect
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

## useEffect unmounting
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

## userEffect only once

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

## Hooks are JavaScript functions but consider

* Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
* Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions.

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

## More Hooks
* useContext
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue

* [Api Reference](https://reactjs.org/docs/hooks-reference.html)

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

# Examples

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
