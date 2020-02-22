<!doctype html>
<html>
	<head>
    <title>React & Functional Programming</title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<link rel="stylesheet" href="../../libs/reveal/css/reset.css">
		<link rel="stylesheet" href="../../libs/reveal/css/reveal.css">
		<link rel="stylesheet" href="../../libs/reveal/css/theme/softhouse.css">

		<link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../style.css">

		<script src="../../libs/jquery/jquery.min.js"></script>
		<script src="../../libs/bootstrap/js/bootstrap.min.js"></script>


		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="../../libs/reveal/lib/css/monokai.css">
	</head>
	<body>
		<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top shadow-lg">
			<a class="navbar-brand" href="https://www.softhouse.se">
				<?xml version="1.0" encoding="utf-8"?>
				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 928 179" style="enable-background:new 0 0 928 179;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#FFFFFF;}
				</style>
				<g>
					<path class="st0" d="M795,121.4c-9.5,4.3-6.3,24.8-15.8,31.6c-5.3,3.8-31,4-34.3-3.8c-4.7-11.1,30.2-28.8,23.5-38.9
						c-8.6-12.9-58.5-8.8-61.6-18c-1-3.1,7-17.5,17.7-18.8c11.8-1.9,31.6,19.9,48.2,19.4c32.2-1.1,34.9-51.8,58.5-58
						c20.7-5.4,37.6-1.6,38.8,7.3c2.2,17.3-59.7,45.1-55.8,59.8c4.9,18.6,74.6,26.4,73.8,41.5c-0.4,7.2-13.7,12.5-25.1,9.6
						C840.6,147.4,818.1,111,795,121.4 M866.5,166.7c20.8,6.4,53.4,1.7,54.2-13.4c1.5-30.6-93.3-36.1-99.1-53
						c-3.8-11.2,85.4-49.2,83.1-73.3c-1.4-15.1-33.7-18-62.2-12.1C787.6,26,807.3,84,772.8,86.7c-14.9,1.2-32.8-26.1-54.2-26.1
						c-13.9,0-33,25.6-30.3,33.2c5.8,16.9,63.6,6.4,73.2,20.1c5.8,8.2-36,26.9-27.8,45.2c4.6,10.2,40.9,14.6,52.1,5
						c9.3-7.9,4.9-34.5,12.1-37.7C814.7,119,839.5,158.4,866.5,166.7"/>
					<path class="st0" d="M62.8,101.3H21.3v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H11v-8.7h42.7l0-10.7H23.3
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M571.8,101.3h-41.4v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H520v-8.7h42.7v-10.7h-30.4
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M81.5,103.9v24.5c0,8.8,2.9,11,12.2,11H130c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11H93.7
						C84.5,92.9,81.5,95,81.5,103.9 M93,101.5h37.9v29H93V101.5z"/>
				</g>
				<polygon class="st0" points="159.8,92.9 209.3,92.9 209.3,101.3 171.3,101.3 171.3,113.4 197.2,113.4 197.2,122.1 171.3,122.1
					171.3,139.5 159.8,139.5 "/>
				<polygon class="st0" points="256.5,139.5 245.1,139.5 245.1,101.3 222.6,101.3 222.6,92.9 279.3,92.9 279.3,101.3 256.5,101.3 "/>
				<polygon class="st0" points="292.5,92.9 304,92.9 304,110.6 339.7,110.6 339.7,92.9 351.2,92.9 351.2,139.5 339.7,139.5
					339.7,119.9 304,119.9 304,139.5 292.5,139.5 "/>
				<g>
					<path class="st0" d="M368.6,103.9v24.5c0,8.8,2.9,11,12.2,11h36.3c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11h-36.3
						C371.6,92.9,368.6,95,368.6,103.9 M380.1,101.5h37.8v29h-37.8V101.5z"/>
					<path class="st0" d="M458.3,130.8H491V92.9h11.5v35.5c0,8.7-3,11-12.3,11h-31.1c-9.3,0-12.2-2.3-12.2-11V92.9h11.4V130.8z"/>
				</g>
				<polygon class="st0" points="590.5,92.9 640.9,92.9 640.9,101.2 602.1,101.2 602.1,111.3 627.1,111.3 627.1,119.4 602.1,119.4
					602.1,130.8 641.5,130.8 641.5,139.5 590.5,139.5 "/>
				</svg>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto">
					<script src="../../navigation.js"></script>
				</ul>
			</div>
		</nav>
		
		<div class="reveal">
			<div class="slides">

### 4. React</h3>
##### Functions and intro to Functional Programming</h5>

---

#### What is a function?</h4>
          <ul>
            <li>“A function is a process which takes some input, called arguments, and produces some output called a return value." - <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976">Eric Elliot</a></li>
            <li>“Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it." - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">MDN</a></li>
          </ul>

---


#### Functions can be used for:</h4>
          <ul>
            <li>Mapping: Based on given inputs it produces some output it maps input values to output values.</li>
            <li>Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure. (Procedural programming)</li>
            <li>I/O: Functions can communicate with other parts of the system, such as the screen, storage, system logs, or network.</li>
          </ul>

---


####  Declaring a function
            ```JavaScript
            function saySomething(word) {
              console.log(word);
            }
            ```


---


####  Declaring a nameless function
            ```JavaScript
            var saySomething = function(word) {
            console.log(word);
            }
            ```


---


  ## Calling a function
            ```JavaScript
            var saySomething = function(word) {
            console.log(word);

            saySomething('JS rocks!');
            ```


---


  ## Get save value returned from function
            ```JavaScript
            function myFunc(myValue) {
              return myValue;
            }

            var value = myFunc(5);
            console.log(value); //5
            ```


---


  ## Using value returned from function
            ```JavaScript
            function myFunc(myValue) {
              return function mySecondFunc(){
                console.log('2nd');
              };
            }

            var func = myFunc(5);
            func();
            ```


---


  ## Function in object
            ```JavaScript
            const myObj = {
              func : function sayHello(myValue) {
              console.log('hello');
              }
            }

            myObj.func();
            ```


---


  ## Function in object returning function
            ```JavaScript
            const myObj = {
              func: function myFunc(myValue) {
                return function mySecondFunc(){
                  console.log('2nd');
                };
              }
            }

            var returnedFunc = myObj.func();
            returnedFunc();
            ```


---


  ## Function as a parameter
            ```JavaScript
            function sayHello(helloFunc){
              helloFunc('hi!');
            };

            const func = (word)=>{console.log(word)}
            sayHello((word)=>{
              console.log(word);
            });
            ```


---


  ## Arrow functions
            ```JavaScript
            const myFunc = function(param){
              console.log(param)
            }

            const myFunc = (param) => {
              console.log(param);
            }

            myFunc('hello');
            ```


---


  ## Arrow functions
            ```JavaScript
            const myFunc = function(param){
              return param;
            }

            const myFunc = (param) => {
              return param;
            }

            const myFunc = (param) => param;

            const myFunc = param => param;

            myVal = myFunc(12);
            console.log(myVal);
            ```


---


#### Arrow functions</h4>
          <ul>
            <li>Arrow Function DOES NOT bind it's own this.</li>
            <li>Arrow Functions lexically bind their context so this actually refers to the originating context.</li>
          </ul>

---


#### Functional Programming</h4>
          <ul>
            <li>Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.</li>
            <li>Functional programming is declarative rather than imperative, and application state flows through pure functions.</li>
          </ul>

---


#### Functional code tends to be:</h4>
          <ul>
            <li>More concise</li>
            <li>More predictable</li>
            <li>Easier to test</li>
          </ul>

---


#### Declarative vs Imperative</h4>
          <ul>
            <li><b>Declarative programming</b> is a programming paradigm … that expresses the logic of a computation without describing its control flow.</li>
            <li><b>Imperative programming</b> is a programming paradigm that uses statements that change a program's state.</li>
          </ul>

---


#### Declarative vs Imperative</h4>
          <ul>
            <li><b>Declarative programming</b> is like asking your friend to draw a landscape. You don't care how they draw it, that's up to them.</li>
            <li><b>Imperative programming</b> is like your friend listening to Bob Ross tell them how to paint a landscape. While good ole Bob Ross isn't exactly commanding, he is giving them step by step directions to get the desired result.</li>
          </ul>

---


#### Parts of functional programming</h4>
          <ul>
            <li>Pure functions</li>
            <li>Function composition</li>
            <li>Avoid shared state</li>
            <li>Avoid mutating state</li>
            <li>Avoid side effects</li>
          </ul>

---


####  Pure functions

* Functions that given the same inputs, always returns the same output
* If the function does not return anything it's not a pure function
* Has no side-effects

            ```JavaScript
            function calc(val1, val2){
              return val1 + val2;
            }
  
  ---


#### Function composition</h4>
          <ul>
            <li><b>Function composition</b> is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.</li>
          </ul>

---


#### Shared state</h4>
          <p><b>Shared state</b> is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.</p>

---


####  Mutating state
            An **immutable object** is an object that can't be modified after it's created. Conversely, a mutable object is any object which can be modified after it's created.
            
            ```JavaScript
            let myObject = {firstName: 'John', lastName: 'Doe'};
            myObject.firstName = 'Tommy'; ← Mutating
            const newObject = Object.assign({}, {firstName: 'Tommy', lastName: 'Doe'});
            ```


---


#### Side effects</h4>
          <ul>
            <li>A side effect is any application state change that is observable outside the called function other than its return value.</li>
            <li>Console.log( ), document.appendChild are examples of side effects.</li>
          </ul>

---


#### What is a curried function?</h4>
          <ul>
            <li>A curried function is a function that takes multiple arguments one at a time.</li>
            <li>const add = a => b => a + b;</li>
            <li>const result = add(2)(3); // => 5</li>
            <li>First, the function takes a, and then returns a new function, which then takes b returns the sum of a and b. Each argument is taken one at a time.</li>
          </ul>

---


####  Currying

            ```JavaScript
            function add(num, num1){
              return function(num3){
                return num + num1 + num3;
              }
            }
            
            console.log(calc(4,5)(100));  // 109
            ```


---

