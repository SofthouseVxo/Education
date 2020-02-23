### 14. React
#### Destructuring, Rest & Spread
##### JavaScript ES6

---

####  Rest
...rest is a collection of all remaining elements into an array.

```JavaScript
function myFunc (x, y, ...a) {
    console.log(a); //[33, 44, 55]
}

myFunc(1, 2, 33, 44, 55);
```

---

####  Rest
```JavaScript
function myFunc({id, name, ...rest}) {
  console.log(rest); // {age: 12, gender:'male'}
}

myFunc({id: 1, name: 'robin', age: 12, gender: 'male'});
```

---


#### Spread

* The spread operator, takes either an array or an object and expands it into its set of items.
* Spreading was introduces with JS6.
* Commonly used in react applications.
* The spread syntax is three dots ...

---

####  Without Spread
```JavaScript
var foo = [33, 44];
var bar = [1,2, foo, 5, 6];
console.log(bar);
// output?
```

---

####  Without Spread
```JavaScript
var foo = [33, 44];
var bar = [1,2, foo, 5, 6];
console.log(bar);
// output?
// [1,2,[33,44],5,6]
```

---

####  With Spread
```JavaScript
var foo = [33, 44];
var bar = [1,2, ...foo, 5, 6];
console.log(bar);
// [1,2,33,44,5,6]
```

---

####  Spreading objects
```JavaScript
var state = {id: 1, user: 'robin'};

var newState = {...state, age: 28}; // New state, no mutation
var newState2 = {...newState, id: 2}; // New state, no mutation

console.log(state); // {id: 1, user: 'robin'}
console.log(newState); // {id: 1, user: 'robin', age:28}
console.log(newState2); // {id: 2, user: 'robin', age:28}
```

---

#### <a href="https://thecodebarbarian.com/object-assign-vs-object-spread.html" target="_blank">Spread & Object Assign</a>

---

#### Destructuring

* The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">MDN Reference</a>
* <a href="http://exploringjs.com/es6/ch_destructuring.html#sec_overview-destructuring">Destructuring Objects</a>

---

####  Destructuring array

```JavaScript
[a, b, ...theRest] = [10, 20, 30, 40, 50]

console.log(theRest); // [30, 40, 50]
```

---

####  Handling objects without Destructuring
```JavaScript
const obj = { first: 'Jane', last: 'Doe' };

const first = obj.first;
const last = obj.last;

console.log(first, last) // 'Jane', 'Doe'
```

---

####  Destructure an Object

```JavaScript
const obj = { first: 'Jane', last: 'Doe' };

const {first, last} = obj; // first = 'Jane'; last = 'Doe'
console.log(first); // 'Jane'
console.log(last); // 'Doe'
```

---

####  Destructure an Object

```JavaScript
const obj = { first: 'Jane', last: 'Doe' };

const {first: f, last: l} = obj;
// f = 'Jane'; l = 'Doe'
console.log(f); // 'Jane'
console.log(l); // 'Doe'
```

---

####  Destructure an Object

```JavaScript
const obj = {
  first: 'Jane',
  last: 'Doe',
  address: {
    zipcode: 23434
  }
};

const {
  address: {
    zipcode
  }
} = obj;

console.log(zipcode); // 23434
console.log(address); // address is not defined
```

---

#### Spread attributes can be useful but they also make it easy to pass unnecessary props to components that don't care about them or to pass invalid HTML attributes to the DOM. We recommend using this syntax sparingly. - <a href="https://reactjs.org/docs/jsx-in-depth.html#spread-attributes">React Documentation</a>