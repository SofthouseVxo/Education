#Hooks basic
React version 16.8.0

<br/>
<br/>

* Completely opt-in. You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
* 100% backwards-compatible. Hooks don’t contain any breaking changes.
* Available with the release of v16.8.0. (1 month ago)

* Hooks let you use state and other React features without writing a class.
* Hooks don’t work inside classes — they let you use React without classes.
* [React Motivation](https://reactjs.org/docs/hooks-intro.html#motivation)

<br/>
<br/>

```
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

## Effect Hook - useEffect

* The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
* It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes,
* The function passed to useEffect will run after the render is committed to the screen.

```
export default function MyComponent(props) {
 const [count, setCount] = useState(0);

 // Similar to componentDidMount and componentDidUpdate:
 useEffect(() => {
   // Update the document title using the browser API
   console.log('user Effect runs');
 });

 return (
   <div>
     <button onClick={() => setCount(count + 1)}>Click me</button>
   </div>
 );
}
```
