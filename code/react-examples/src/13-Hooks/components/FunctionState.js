import React, { useState, useEffect } from 'react';

/*
* Function component where we add a state with useState
*
*/
export default function FunctionState(props) {
  /*
  * count is the value,
  * setCount is the method that we use to update the value
  * 0 is the initial value
  */
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('user Effect runs when something updates');
  });

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}