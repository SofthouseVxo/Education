### 6. JavaScript
#### Scopes

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What are Scopes?
Scope determines the accessibility of variables, objects, and functions from different parts of the code.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Variable Scopes

* In JavaScript there are two types of scope:
  * Local Scope = inside a function.
  * Global Scope = not inside a function.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  The global scope

* Global = Something that is accessible everywhere to everything in your code.

* Variables created outside functions are **Global** and can be used anywhere in the script.
* They are stored in the memory as long as the web page is loaded into the web browser (take up more memory). 
* Placing variables in the global scope creates a higher risk of naming conflicts.

```JavaScript
function sayHello() {
  console.log('hello world!')
}

var user = 'John Doe' // Global variable
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---


####  The local(function) scope

* Variables defined inside a function are not accessible (visible) from outside the function.
* They can only be used inside the function where they were defined.
* Each new function creates a new scope.


```JavaScript
function myFunc() {
  var value = 15; /* local variable */
}

console.log(value); /* value is not defined */
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Local variables

* Variables indide function scopes are created when the function is run and removes them as soon as the function is done.
* Meaning:
  * If a function run twice, the variable can have different values each time.
  * There will be no conflicts if two different functions name a variable with the same name.

```JavaScript
function myDateFunc() {
  var myDate = new Date(); /* Different value each time */
}

function mySecondDateFunc() {
  var myDate = new Date(); /* Different value each time */
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

####  Variable declared in the global scope

```JavaScript
var myNumber = 5;

function sayNumber() {
  console.log(myNumber); // 5
}

sayNumber();

console.log(myNumber); // 5
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Variable declared in global scope and local scope

```JavaScript
var myNumber = 5; // 5

function sayNumber() {
  var myNumber = 100;
  console.log(myNumber); // 100
}

sayNumber();

console.log(myNumber); // 5
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Variable declared in global scope and local scope

```JavaScript
var myNumber = 5; // 5

function sayNumber() {
  console.log(myNumber); // undefined but why?
  var myNumber = 100;
  console.log(myNumber); // 100
}

sayNumber();

console.log(myNumber); // 5
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Declaring variables in different scopes

```JavaScript
var myNumber = 5;

function sayNumber(param) {
  var myNumber = param;
  console.log(myNumber); // 100
}

sayNumber(100);
console.log(myNumber)
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  variables declaration without **var** keyword

* JavaScript allows variable declaration without **var** keyword. 
* However you must assign a value when you declare a variable without var keyword.
* **NOTE!** This is Not Recommended since it it can accidently overwrite an existing global variable. We will talk about scope later on. 

```JavaScript
username = 'John';
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Remember function expressions?

* To avoid polluting the global scope.
* Isolating callbacks.

```JavaScript
area(5,7); // area is not a function

var area = function(width, height) {
  console.log(width * height);
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

####  Callbacks

* A function passed to another function is often referred to as a “callback” in JavaScript.

```JavaScript

// In this case "callBack" is available everywhere
let users = ['John', 'Jane'];

function someCallBack(user) {
  // do stuff to the user
}

array.forEach(someCallBack)
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Callbacks

* A function passed to another function is often referred to as a “callback” in JavaScript.

```JavaScript

let users = ['John', 'Jane'];

// In this case the callback (an anonymous function) is only available in the function.
// Being created when runs and removed when done.
users.map(function(user){ 
  //do stuff to an user 
})

```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Callbacks

* A function passed to another function is often referred to as a “callback” in JavaScript.

```JavaScript

let users = ['John', 'Jane'];

// In this case the callback (an anonymous function) is only available in the function.
// Being created when runs and removed when done.
let someCallBack = function(user){ 
  //do stuff to an user 
}
users.map(someCallBack)

// Although someCallBack will be available after declaration
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Immediately Invoked Function Expression(IIFE)

* Executed when the interpreter comes across them.
* Not available in the global scope.
* A way to isolate scope.

```JavaScript
(function() {
  var width = 5;
  var height = 10;

  return width * height;
}());
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Summary

* Function declarations when you want to create a function on the global scope.
* Use function expressions to limit where the function is available.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### var, let & const
#### Block scoped variables

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Block scoped variables

* Variables declared with "var" inside a block { } **can** be accessed from outside the block.
* Variables declared with "let" inside a block { } can **not** be accessed from outside the block.
* Before ES2015(ES6) JavaScript did not have Block Scope.

```JavaScript
// If statements will be covered in more detail in the next lexture
if(true){
  var fruit1 = 'apple';        //exist in function scope
  const fruit2 = 'banana';     //exist in block scope
  let fruit3 = 'strawberry';   //exist in block scope
}
console.log(fruit1); //apple
console.log(fruit2); //error: fruit2 is not defined
console.log(fruit3); //error: fruit3 is not defined
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Redeclaring variables

```JavaScript
var x = 10;
// Here x is 10
if(true){
  var x = 2;
  // Here x is 2
}
// Here x is 2
```

```JavaScript
var x = 10;
// Here x is 10
if(true){
  let x = 2;
  // Here x is 2
}
// Here x is 10
```
[try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_es6_let)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Constants
* Variables defined with const behave like "let" variables, except they cannot be reassigned.
* If variables defined with const are objects or arrays you can change the properties of them.
* Constants were introduced with es6.

```JavaScript
const myValue = 10;
myValue = 1; // This will give an error
myValue = myValue + 2;   // This will also give an error
```

* const variables must be assigned a value when they are declared:

```JavaScript
const PI = 3.14159265359;
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