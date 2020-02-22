<!doctype html>
<html>
	<head>
    <title>JavaScript - Scopes</title>
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

### 6. JavaScript</h3>
##### Scopes</h5>

---


#### What are Scopes?</h4>
          <p>Scope determines the accessibility of variables, objects, and functions from different parts of the code.</p>

---


#### Variable Scopes</h4>
          <ul>
            <li>In JavaScript there are two types of scope:</li>
            <ul>
              <li>Local Scope = inside a function</li>
              <li>Global Scope = not inside a function</li>
            </ul>
          </ul>

---


####  The global scope

* Global = Something that is accessible everywhere to everything in your code.

* Variables created outside functions are <u>Global</u> and can be used anywhere in the script.
* They are stored in the memory as long as the web page is loaded into the web browser (take up more memory). 
* Placing variables in the global scope creates a higher risk of naming conflicts.

            ```JavaScript
            function sayHello() {
              console.log('hello world!')
            }

            var user = 'John Doe' // Global variable
            ```


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


---


####  variables declaration without **var** keyword

* JavaScript allows variable declaration without **var** keyword. 
* However you must assign a value when you declare a variable without var keyword.
* **NOTE!** This is Not Recommended since it it can accidently overwrite an existing global variable. We will talk about scope later on. 
            
            ```JavaScript
            username = 'John';
            ```


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


---

        <section data-markdown>
            <script type="text/template">
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


---


#### Summary</h4>
          <ul>
            <li>Function declarations when you want to create a function on the global scope.</li>
            <li>Use function expressions to limit where the function is available.</li>
          </ul>

---


#### var, let & const</h4>
##### Block scoped variables</h5>

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


---


####  Constants
* Variables defined with const behave like "let" variables, except they cannot be reassigned.
* If variables defined with const are objects or arrays you can change the properties of them.
* Constants were introduced with es6.

            ```JavaScript
            const myValue = 10;
            myValue = 1;             // This will give an error
            myValue = myValue + 2;   // This will also give an error
            ```

* const variables must be assigned a value when they are declared:

            ```JavaScript
            const PI = 3.14159265359;
            ```


---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---
        

