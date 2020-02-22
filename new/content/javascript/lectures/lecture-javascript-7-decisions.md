<!doctype html>
<html>
	<head>
    <title>JavaScript - Decisions</title>
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

### 7. JavaScript</h3>
##### Decisions</h5>

---


#### Decisions</h4>
          <ul>
            <li>When writing applications we often need to evaluate if some conditions are met.</li>
            <li>Depending on if they are we need to make decisions on how to proceed.</li>
          </ul>

---


#### Real world example</h4>
          <ul>
            <li>Should I buy a new jacket today? (Decision)</li>
            <li>IF the store has a green jacket? (Condition)</li>
            <ul>
              <li>Yes -> Buy it.</li>
              <li>No -> Keep Looking</li>
            </ul>
          </ul>

---


####  Buying jacket in code

            ```JavaScript
              if(jacket === 'green'){
                buyJacket();
              } else {
                keepLooking(jacket);
              }
            ```


---


#### Evaluate & Decide</h4>
          <ul>
            <li><b>Evaluation</b> - analyse/check if values are the same, equal etc.</li>
            <li><b>Decision</b> - decide what to do depending on the result of the evaluation.</li>
          </ul>

---


####  Conditions
* Conditions placed inside of **```if( )```** will be evaluated.
* Depending on if conditions are met we decide what code to run.

            ```JavaScript
              if(age > 18){
                // if the variable age is HIGHER than 18 running code written here.
              } else {
                // if the variable age is LOWER than 18 running code written here.
              }
            ```


---


####  Comparison operators
* Comparing different values
* returns true or false depending on outcome

            ```JavaScript
              if(age > 18) // age is greater than 18
              if(age < 18) // age is lesser than 18
              if(age >= 18) // age is greater than 18 or equal to 18 
              if(age <= 18) // age is lesser than 18 or equal to 18
              if(age == 18) // age is equal to 18
              if(age === 18) // age is strict equal to 18 and is of the same datatype
              if(age != 18) // age is NOT equal to 18
              if(age !== 18) // age is strict NOT equal to 18 and is NOT of the same datatype
            ```


---


####  Depending on if the condition is met true or false is returned

            ```JavaScript
            let age = 17;
            let is18orOver = age >= 18;

            console.log(is18orOver); // false since 17 is lesser than 18

            if(is18orOver){
              // runs only if is18orOver is set to true
            }
            ```


---


####  Falsy values

* Values treated as if they are false

            ```JavaScript
            let score = false;       // boolean - falsy
            let score = 0;           // number - falsy
            let score = 'hello' * 5; // NaN - falsy
            let score = '';          // Empty value - falsy
            let score = null;        // null - falsy
            let score;               // undefined - falsy
            ```


---


####  Truthy values

* Values treated as if they are true
* Which is almost everything else than previous slide

            ```JavaScript
            let score = true;     // boolean - truthy
            let score = 1;        // number - truthy
            let score = 4 * 5;    // number calculations - truthy
            let score = 'fifty';  // string - truthy
            let score = 'true';   // string - truthy
            let score = '0';      // string - truthy
            let score = 'false';  // string - truthy
            ```


---



####  Multiple expressions

            ```JavaScript
            let age1 = 19;
            let age2 = 23;
            let maximumAge = 50;

            if((age1 + age2) < maximumAge){
              // code run when total age is beneath the maximum age
            }
            ```


---


####  Logical Operators

* There are three logical operators in JavaScript:
  * || (OR)
  * && (AND)
  * ! (NOT)

            ```JavaScript
            let a = undefined;
            let b = 'John Doe';
            
            let result = a || b; // result is a OR b
            console.log(result); // 'John Doe' since a is a falsy value
            ```


--- 


####  Logical || (OR)

* OR tries to find the truthy value.

            ```JavaScript
            let a = false;
            let b = true;

            // checks if a OR b is true
            if(a || b){
              console.log('Hey dude!'); // will log since b is a truthy value
            }
            ```


---


####  Logical && (AND)

            ```JavaScript
            let a = false;
            let b = true;

            result = a && b; // returns false since both a and b is not truthy
            ```


---


####  Logical && (AND)
* What happens in which order?
              1. Evaluates operands from left to right.
              1. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
              1. If all operands have been evaluated (i.e. all were truthy), returns the last operand.
        
            ```JavaScript
            let a = true;
            let b = 12;
            let c = 'John Doe'

            result = a && b && c; // returns John Doe
            ```


---


####  Logical && (AND)

* AND tries to find the falsy value.

            ```JavaScript
            let hour = 12;
            let minute = 30;
            
            if (hour == 12 && minute == 30) {
              alert( 'The time is 12:30' );  // will alert since both conditions are met
            }
            ```


---


####  Logical ! (NOT)

* Usually if a condition is met true is returned
* Using logical not false is returned instead

            ```JavaScript
            let age = 17;
            let isUnder18 = !(age >= 18);
              
            console.log(isUnder18); // isUnder18 is true

            if(!isUnder18){
              // runs if variable isUnder18 is true
            }
            ```


---


####  Logical Operators

* Logical operators allows you to compare results of more than one comparison operator.

            ```JavaScript
            if((10 > 2) && (3 === 3)){
              // code run if 10 is bigger than 2 AND 3 is strict equal to 3
            }

            if((10 > 2) || (3 === 3)){
              // code run if 10 is bigger than 2 OR 3 is strict equal to 3
            }
            ```


---


####  Example

            ```JavaScript
            let a = 10;
            let b = 10;
            let c = 15;
            let d = 20;
            if ((a == b || c == d) && ((a == b) != (c == d))) {
              // will this code run?
            }
            ```


---


####  else if, else

            ```JavaScript
            let a = 10;
            let b = 10;
            let c = 10;
            
            if (a === b) {
              console.log('first');
            } else if(a === c) {
              console.log('second');
            }
            else {
              console.log('third');
            }
            ```
            [Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif)


---


####  Ternary operator
* A shorter way to write
* Instead of if and else we use ? & :

            ```JavaScript
            if (a === b) {
              console.log("Match");
            } else {
              console.log("No match");
            }

            // Ternary operator
            a === b ? console.log("Match") : console.log("No match");
            ```


---


####  Switch Case

            ```JavaScript
            switch(expression) {
              case x:
                // code block
                break;
              case y:
                // code block
                break;
              default:
                // code block
            }
            ```
            [Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch)


---


####  Strict checking

            === checks condition and type

            ```JavaScript
            (false == 0)  // true
            (false === 0) // both are false however note the same type

            (undefined == null)  // true
            (undefined === null) // false

            (null == false)       // false
            (undefined == false)  // false
            (null == 0)           // false
            (undefined == 0)      // false
            ```


---


#### Handling Errors</h4>
          <ul>
            <li>Errors can be:</li>
            <ul>
              <li>Coding errors made by the programmer.</li>
              <li>Errors due to wrong input.</li>
              <li>Errors due to incorrect response from Backend</li>
              <li>and other unforeseeable things.</li>
            </ul>
          </ul>

---


#### Handling errors</h4>
					<ul>
						<li>The <b>try</b> statement lets you test a block of code for errors.</li>
						<li>The <b>catch</b> statement lets you handle the error.</li>
						<li>The <b>throw</b> statement lets you create custom errors.</li>
						<li>The <b>finally</b> statement lets you execute code, after try and catch, regardless of the result.</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### try & catch

						* The <u>try</u> statement allows you to define a block of code to be tested for errors while it is being executed.
						* The <u>catch</u> statement allows you to define a block of code to be executed, if an error occurs in the try block.

						```JavaScript
						try {
							adddlert("Welcome guest!"); // invalid function name
						}
						catch(err) {
							document.getElementById("demo").innerHTML = err.message;
						}
						```
						<a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch" target="_blank">Try on w3schools</a>
					</script>

---
        
        <section data-markdown>
					<script type="text/template">
						#### try & catch - Fetching users
              
  ```JavaScript
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.

try {
  let firstUser = responseUsers[0];
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```
<a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch" target="_blank">Try on w3schools</a>
					</script>

---

        <section data-markdown>
					<script type="text/template">
						#### if statement - Fetching users

```JavaScript
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.
if(responseUsers && responseUsers.length){
  let firstUser = responseUsers[0];
}
```
						[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch)
					</script>

---
        
				<section data-markdown>
					<script type="text/template">
						#### The throw Statement

						* The throw statement allows you to create a custom error.

						```JavaScript
						try {
							if(true) throw 'Im an ERROR!';
						}
						catch(err) {
							console.log(err);  // Im an ERROR
						}
						```
						[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch)
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### The Finally Statement

						* The finally statement lets you execute code, after try and catch, regardless of the result.

						```JavaScript
						try {
							Block of code to try
						}
						catch(err) {
							Block of code to handle errors
						}
						finally {
							Block of code to be executed regardless of the try / catch result
						} 
						```
					</script>

---


#### Difference between try catch and if statements</h4>
          <ul>
            <li>if/else: you check for conditions and parameters that influence your program’s execution.</li>
            <li>if-else, you're expecting a specific kind of error or condition that may come from within your code.</li>
            <li>try/catch: you check for the known unknown bad things that can happen and attempt to catch any wrench thrown in the works.</li>
            <li>try/catchdeal with thing that could possibly go wrong and you can't do much about it. Those things are like networking, IO, third party services integrations...</li>
          </ul>

---
        
        <section data-markdown>
            <script type="text/template">  
```JavaScript
let users = null;

try {
  one();
  two();
  three();
} catch (error) {
  console.log('ERROR');
  // This code will get run if any of the above functions throws an error
}

function one(){
  console.log(users);
}

function two(){
  console.log(users.length);
}

function three(){
  console.log('gets here');
}
```
  
  ---

  
  ### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>
  ---
        </div>
      </div>

		<script src="../../libs/reveal/js/reveal.js"></script>
		<script src="../../initialize.js"></script>
	</body>
</html>
