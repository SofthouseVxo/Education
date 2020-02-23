### 10. JavaScript
#### The "this" keyword

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### In a web browser, when scripts create global variables, they're created as members of the global object.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### The Global object

* Global = Something that is accessible everywhere to everything in you're code.
* A global object (window) and a special variable called **this** are created in the global context.
* This is done by the JavaScript engine.
* Run an empty index.html and check console for this or Window


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### window object example

```JavaScript
var color = 'blue';
let firstname = 'Jane';
const lastname = 'Doe';

console.log(window.color); // blue
console.log(window.firstname); // undefined
console.log(window.lastname); // undefined
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### The **this** keyword refers to the object it belongs to.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### "this" has different values depending on where it is used:

* Alone, this refers to the global object.
* In a function, this refers to the global object.
* In a function, in strict mode, this is undefined.
* In a method, this refers to the owner object.
* In an event, this refers to the element that received the event.
* Methods like call(), and apply() can refer this to any object.

<a href="https://www.w3schools.com/js/js_this.asp">W3schools reference</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### This alone
* When used alone, the owner is the Global object, so this refers to the Global object.
```JavaScript
console.log(this); // window object (global object)
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### This in a function(default)

* In a JavaScript function, the owner of the function is the default binding for this.

```JavaScript
function myFunction() {
  console.log(this); // window object (global object)
}

myFunction();
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### This in a function using strict

```JavaScript
"use strict";
let myFunction = function() {
  console.log(this);  // undefined
}

myFunction();
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### This in a method

* If "this" is used inside a function which is a method in an object, "this is the object it belongs to".

```JavaScript
let person = {
  firstName  : 'Jane',
  myFunction : function() {
    console.log(this);  // { firstName: 'Jane', myFunction: myFunction() }
  }
};

person.myFunction();
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### <a href="https://medium.com/@leonardobrunolima/javascript-tips-apply-vs-call-vs-bind-d738a9e8b4e1" target="_blank">call( ), apply( ) & bind( )</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Call( )

* call( ) is used to invoke (call) a method with an owner object as an argument (parameter). Arguments passed in one by one using commas.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target="_blank">apply( )</a> is like Call( ) however we can pass arguments as an array.

```JavaScript
function fullName() {
  console.log(this);
}

let person = {
  firstname:'Jane',
  lastname: 'Doe'
}

fullName(); // window 
fullName.call(person); // { firstname: 'Jane', lastname: 'Doe'}
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Call( )

```JavaScript
function fullName() {
  console.log(this.firstname);
}

let person = {
  firstname:'Jane',
  lastname: 'Doe'
}

fullName(); // undefined 
fullName.call(person); // 'Jane'
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Bind( )

* ```Bind( )``` returns a new function, allowing you to pass in a this array and any number of arguments. 
* Use it when you want that function to later be called with a certain context.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" target="_blank">bind( )</a>

```JavaScript
var person = {
  firstname:'Jane',
  sayName: function() {
    console.log(this.firstname);
  }
}

var callName = person.sayName;
callName(); // The function gets invoked at the global scope
// expected output: undefined

var callName2 = callName.bind(person);
callName2(); // Jane
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>