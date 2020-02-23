### 5. JavaScript
#### Functions

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### What is a function?

* A function is a named section of a program that performs a specific task. In this sense, a function is a type of procedure or routine.
* Functions are one of the fundamental building blocks in JavaScript.
* “A function is a process which takes some input, called arguments, and produces some output called a return value." - <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976">Eric Elliot</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Functions can be used for:

* Given inputs it produces some output.
* Perform a sequence of steps. The sequence is known as a procedure.
* Functions can communicate with other parts of the system, such as the screen, storage, system logs, or network.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### JavaScript Functions and making a recipe analogy

* You start with a specific set of ingredients.
* You perform a specific procedure using those ingredients.
* You will get a reliable product at the end.
* A function is also a reusable recipe that performs the same set of actions over and over again on a set of ingredients.
* <a href="https://www.codeanalogies.com/javascript-functions-explained">CodeAnalogies ref</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  JavaScript Functions and making a recipe analogy
```JavaScript
function makeSandwich(lettuce, cheese, bread) {
  var sandwich = lettuce + cheese + bread;
  return sandwich;
}
```
* Every time we want to make a sandwich we can call the function with the ingredients we want and it will return different sandwiches depending on ingredients.



&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Basic function
```JavaScript
  function sayHello() {
  alert('hello world!');
};
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Invoking/calling a function

* When a function is invoked the code inside it will run.

```JavaScript
  function sayHello() {
  alert('hello world!')
};

// invoking/calling the function
sayHello();
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Parameter

A parameter is a variable in a function definition.

```JavaScript
// word is the parameter
function saySomething(word) {
  console.log(word);
};
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Argument

When a function is called, the **arguments** are the data you pass into the method as **parameters**.

```JavaScript
// word is the parameter
function saySomething(word) {
  console.log(word);
};

// 'hello world' is the argument
saySomething('hello world');
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---


####  Arguments object

* Arguments is an Array-like object accessible inside functions.
* It contains the values of the arguments passed to that function.

```JavaScript
function saySomething() {
  console.log(arguments);  // {0: 'hello world', 1: 15}
  console.log(arguments[0]);  // 'hello world'
};

saySomething('hello world', 15);
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Invoking/calling a function
```JavaScript
function addValues(val1, val2) {
  console.log(val1 + val2); // 11
};

// invoking/calling the function
addValues(4,7);
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Get save value returned from function
```JavaScript
function myFunc(myValue) {
  return myValue;
}

var value = myFunc(5);
var value2 = myFunc(10);
console.log(value);  //5
console.log(value2); //10
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Function expression

* An expression is any valid unit of code that resolves to a value.
* Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
* Function declarations are hoisted but function expressions are not.

```JavaScript
area(5,7);  // 35

function area(width, height) {
  console.log(width * height);
}
```

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

---

####  Function calling a function

```JavaScript
function sayWord(word) {
  var allWords = word + getWord();
  console.log(allWords);
}

function getWord() {
  return ' world!';
}

sayWord('hello');
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Function calling a function

```JavaScript
function addNSub(val1, val2) {
  var added = val1 + val2;
  return sub(added);
}

function sub(val) {
  return val - 2;
}

var result = add(14, 28);
console.log(result);
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Arrow functions

* We will look closer on arrow functions later on in the course.
* However you will run into the online before that.
* Arrow functions was introduced with ES6.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Arrow functions
```JavaScript
// Ordinary function
const myFunc = function(param){
  return param;
}

// Same function as above but as an arrow function
const myFunc = (param) => {
  return param;
}

// Same function as above but with less code (instant return)
const myFunc = (param) => param;

// Same function as above but with even less code (instant return)
const myFunc = param => param;

var myVal = myFunc(12);
console.log(myVal);
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Descriptive Blocks - Commenting Functions

```JavaScript
/**
* @desc opens a modal window to display a message
* @param string msg - the message to be displayed
* @return bool - success or failure
*/
function modalPopup(msg) {
  return true;
}
```


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  Indentations in JavaScript

* There is no "right" way of doing it. Most of the time you and your team or others involved in the project agree on certain rules.
* Most important is to: **Be consistent**
* General rules:
* Avoid long lines
* Use tabs/spaces to clarify where stuff belongs

<a href="https://courses.cs.washington.edu/courses/cse154/17au/styleguide/js/spacing-indentation-js.html">JavaScript Unofficial Style Guide</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>