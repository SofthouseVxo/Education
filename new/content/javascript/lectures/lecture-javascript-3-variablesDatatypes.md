<!doctype html>
<html>
	<head>
		<title>JavaScript Variables & Data types</title>
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

					<h3>3. JavaScript</h3>
					<h5>Variables & Data types</h5>

---

				<section data-markdown>
					<script type="text/template">
						#### What is a Variable?

						* A variable is a temporary storage for bits of information.
						* JavaScript variables are containers for storing data values.
						* A variable is like a drawer or a box.
						* You can put a value/thing in it, close it and then when you want to use it you open the drawer.

						```JavaScript
						box = shoes + socks + gloves
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Defining a variable

						* ```var``` is the keyword.
						* ```myValue``` is the name of the variable (sticker on the drawer/box)
						* ```myValue``` is assigned the value 10 (you put 10 in the drawer/box)

						```JavaScript
						var name; // variable name is now defined but contains no value
						var myValue = 10; // variable myValue is defined and assigned a value
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Defining multiple variables on same line

						```JavaScript
						var myVal1, myVal2;

						var name, name2;
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Assigning a value to a variable

						```JavaScript
						// username is the variable name and it's being assigned the value 'John'.
						var username = 'John';
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Using a variable before it has been defined

						* In JavaScript, a variable can be declared after it has been used.
						* This is possible since JavaScript saves declarations in memory before running.
						* This is called **Hoisting**.

						```JavaScript
						name = 'John';
						var name;
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### variables declaration without **var** keyword

						* JavaScript allows variable declaration without **var** keyword. 
						* However you must assign a value when you declare a variable without var keyword.
						* **NOTE!** This is Not Recommended since it it can accidently overwrite an existing global variable. We will talk about scope later on. 
						
						```JavaScript
						username = 'John';
						```
					</script>

---


				<section data-markdown>
					<script type="text/template">
						#### "use strict"
						* The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
						* With strict mode, you can not, for example, use undeclared variables.

						```JavaScript
						"use strict";
						username = 'John'; // This will cause an error because x is not declared
						```

						<a href="https://www.w3schools.com/js/js_strict.asp" target="_blank">W3schools</a>
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Changing variable value

						* It is possible to change the value of a variable after it has been created.
						* However you only use the ```var``` keyword the first time.

						```JavaScript
							var greeting = "hello";
							greeting = 12;
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Naming variables

						* Names needs to be unique and these are called identifiers.
						* Using names that is describing what it contains is very important.
						* This makes development much easier and understandable.
						* Always use english.
						* In lectures I use a lot of myValue, [foobar](https://www.techopedia.com/definition/615/foobar) placeholders.

						```JavaScript
							var greeting = "hello";
							greeting = 12;
						```
					</script>

---


#### JavaScript is case sensitive</h4>
					<ul>
						<li>In JavaScript we use the camelCase naming convention.</li>
						<li>All names start with a letter.</li>
						<li>Instead of My Car we use myCar.</li>
						<li>Cannot start with a number or have blank spaces.</li>
						<li>Cannot use keywords or reserved words (new, var, let etc.).</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### Using a variable thats not been defined

						* JavaScript understands and will create it
						* However it creates it in the global scope by default (bad practice)
						* Avoid this!

						```JavaScript
						// x has not been defined using the "var" keyword
						x = 5;

						console.log(x); /* will log 5 */
						```
					</script>

---


					<h3>Data types</h3>

---

				<section data-markdown>
					<script type="text/template">
						#### Numeric data type

						```JavaScript
							var myValue = 10;
							var mySecondValue = 0,55;
							var myThirdValue  = -324;

							var result = myValue + mySecondValue;
							// result is 10,55
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### String data type
						
						Letters and other characters

						```JavaScript
							var name = 'Jane is cool';
							var char = '.!d';
							var numChar  = '345';

							var result = name + numChar;  // result is "Jane is cool345"
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Boolean data type
						Can be either true or false

						```JavaScript
							var isTrue = true;
							var isNotTrue = false;
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Null value
						* The value null represents the **intentional** absence of any object value.
						* null is "nothing". It is supposed to be something that doesn't exist.
						* The type of null is an object.

						* "You can consider it a bug in JavaScript that typeof null is an object. It should be null." - w3schools
						* You can empty an object by setting it to null:

						```JavaScript
						var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
						person = null;  // Now value is null, but type is still an object
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Undefined value
						* A variable without a value, has the value undefined.
						* Unlike null undefined has the type of undefined and not an object.

						```JavaScript
						var car;  // Value is undefined, type is undefined
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### typeof

						* typeof returns a string indicating the type.

						```JavaScript
							console.log(typeof undefined); // undefined
							typeof null; // object
							typeof 'hello'; // string
							typeof false; // boolean
							typeof 12; // number
						```
					</script>

---


#### Primitive values</h4>
					<ul>
						<li>The data we've covered so far (except null) are primitive data values meaning that they are simple and have no additional properties and methods</li>
						<li>The typeof operator can return one of these primitive types:</li>
						<ul>
							<li>string</li>
							<li>number</li>
							<li>boolean</li>
							<li>undefined</li>
						</ul>
					</ul>

---


#### Non-Primitive values</h4>
					<ul>
						<li>Non-primitve values can have additional properties and methods</li>
						<ul>
							<li>Arrays</li>
							<li>Functions</li>
							<li>Objects</li>
						</ul>
						<li>We will cover these later in the course.</li>
						<li>Note: Arrays and Functions are objects with speacial features, we will dive deeper into this later so for now seperate them.</li>
					</ul>

---	

				<section data-markdown>
					<script type="text/template">
						#### JavaScript is **not** a typed language
						* Meaning you don't declare which datatype a variable should have

						```JavaScript
							var myStr = 'hello'; // is now a string since we use quotations.
							myStr = 12; // is possible since we didn't say it most be a string.
						```

						* Using a typed language it could look something like below
						```JavaScript
							var myStr:string = 'hello'; // is now a string since used :string.
							myStr = 12; // Would throw an error since 12 is not a string.
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Quotation marks, Single or double?
						* You need to start and finish with the same.
						* I personally use single quotes in Scripts and double in markup(HTML).

						```JavaScript
							var myStr = 'hello'; 
						```

						```HTML
							<p width="100"></p>
						```
					</script>

---


#### Debugging</h4>
					<ul>
						<li>Alert, Prompt - shows a modal</li>
						<li>Console.log( ) - logs in the developer console in browser</li>
						<li>Debugger in devtools</li>
						<li>Show in browser</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### alert( ) & prompt( )

						* alert() displays a modal and prompt() displays a modal for entering text.
						* A modal is a dialog box/popup window that is displayed on top of the current page.

						```JavaScript
							var myValue = 12;

							alert(myValue);

							var myPromptValue = prompt("Please enter your name", "Pontus");

							console.log(myPromptValue);
							alert(myPromptValue);
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### console.log( )

						* logs in the developer console in browser

						```JavaScript
							var myValue = 12;

							console.log('my value is ' myValue);
							console.log(typeof myValue);
						```
					</script>

---


#### Debugger in Devtools</h4>
					<ul>
						<li>Setting breakpoints.</li>
						<li>Stepping.</li>
						<li>Scopes.</li>
						<li>Callstacks.</li>
						<li>etc.</li>
					</ul>
  <img style="width: 600px; margin-left: 20px;" src="/new/media/javascript-images/javascript-3/debug.png" alt="debugger">

---

				<section data-markdown>
					<script type="text/template">
						#### Commenting in JavaScript

						```JavaScript
							/*
							* Multi
							* Line
							* Comment
							*/

							var name = 'John Doe'; // Single line comment

							// Single line comment
						```
					</script>

---


#### Why use comments?</h4>
					<ul>
						<li>Comments should be used to explain what your code does (documentation).</li>
						<li>This can make the code easier to read, not just for yourself but for others as well!</li>
					</ul>

---


#### Documentations</h4>
					<ul>
						<li><a href="https://www.w3schools.com/js/default.asp" target="_blank">W3schools</a></li>
						<li><a href="https://developer.mozilla.org/sv-SE/" target="_blank">MDN</a></li>
					</ul>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---
				

