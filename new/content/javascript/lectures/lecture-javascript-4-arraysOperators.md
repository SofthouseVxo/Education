<!doctype html>
<html>
	<head>
		<title>JavaScript Arrays & Operators</title>
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

### 4. JavaScript</h3>
##### Arrays & Operators</h5>

---


####  What is an Array?

* Arrays are used to store multiple values in a single variable.
* Use arrays when you have a list of related values.
            
            ```JavaScript
              var prices = [59, 132, 99];
              var vehicles = ['car', 'motorcycle', 'bus'];
            ```


---
  

####  Creating arrays

            ```JavaScript
              var vehicles = ['car', 'motorcycle', 'bus'];
            ```

            ```JavaScript
              var vehicles = new Array('car', 'motorcycle', 'bus');
            ```


---

				<section data-markdown>
					<script type="text/template">
						#### Arrays
						* Arrays start with index 0

						```JavaScript
var prices = [2, 4, 15];
var firstValue = prices[0]; // firstValue = 2
var secondValue = prices[1]; // secondValue = 4
var thirdValue = prices[2]; // thirdValue = 15
						```
					</script>

---
        

####  Array properties and methods
            
* Arrays have built in methods and properties.
* In simple words they have functionality that we can access and stuff we can do with them.
* We will talk alot about these concepts later on.



---        


####  Length of an Array
* length is a property of arrays that returns or sets the number of elements in a given array.

            ```JavaScript
              var prices = [2, 4, 15];
              console.log(prices.length); // 3
            ```


---


####  Set the length of an Array
* length is a property of arrays that returns or sets the number of elements in a given array.

            ```JavaScript
              var prices = [];
              prices.length = 3;
              console.log(prices); // [undefined, undefined, undefined]
            ```


---


####  Changing values in an array

            ```JavaScript
              var prices = [2, 4, 15];

              prices[2] = 18;
              console.log(prices); // [2, 4, 18]
            ```


---


####  Empty an array

            ```JavaScript
              var prices = [2, 4, 15];

              /** 
  * Option 1
  * Assigns a reference to a new array to a variable, while any other references are unaffected. 
  * Which means that references to the contents of the previous array are still kept in memory, leading to memory leaks.
  */ 
              prices = [];

              // Option 2
              prices.length = 0;
              ```


---


####  Adding and Removing elements in arrays

* Array.push() & Array.pop()

            ```JavaScript
              var numbersArray = [2, 4, 15];

              // .push() adds a value in the end of the array
              numbersArray.push(99); // [2, 4, 15, 99]

              // .pop() removes the last value in the array
              numbersArray.pop(); // [2, 4, 15]
            ```


---


####  Remove a certain part from an array
            
* Splicing arrays in JavaScript removes a certain part from an array to create a new array, made up from the part we took out. 
* array.splice(index, howmany, item1, ....., itemX)

            ```JavaScript
              var myArray = [0,1,2,3,4,5,6,7,8,9];
              var splice = myArray.splice(3,5);
              
              console.log(splice);        // will print out 3,4,5,6,7
              console.log(myArray);       // will print out 0,1,2,8,9
            ```

            [W3schools reference](https://www.w3schools.com/jsref/jsref_splice.asp)


---


####  Convert an Array to a string

* toString() converts an array to a string of (comma separated) array values.

            ```JavaScript
              var fruits = ["Banana", "Orange", "Apple", "Mango"];
              var fruitString = fruits.toString();

              console.log(fruitString); // Banana,Orange,Apple,Mango
            ```


---


####  Operators

* A symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result.

            ```JavaScript
              var user = 'John Doe'; // = is the operator
              var nrOfUsers = 10 + 3 + 5; // nrOfUsers = 18 and + is the operator
              var result = 5 * 3; // result = 15 and * is the operator
              var bigger = 10 > 5; // bigger = true and > is the operator
            ```


---


####  Operators

            ```JavaScript
              var color = 'red'; // Assignment operator
              var result = 5 * 8; // Arithmetic operator
              var name = 'John ' + 'Doe' ; // String operator
              var bigger = 10 > 5; // Comparison operator
              var buy = (5 > 3) && (2 < 4) // Locical operator
            ```


---


####  Arithmetic operators

            ```JavaScript
8 + 2;  // 10
8 - 4;  // 4
8 - 10; // -2
8 / 2;  // 4
8 * 4;  // 32
8++;    // 9 , adds 1
8--;    // 7 , subtracts by 1
20%3;   // 2 , the remainder = how much is left after 20/3 = 18 and (2) is left
            ```

            [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)


---


####  Arithmetic operators

            ```JavaScript
            var result = 8 // 8
            result = result + 2 // 10

            // Same as above
            var result2 = 8 // 8
            result2 += 2 // 10

            // Also works with -=   *=   /=
            var result2 = 8 // 8
            result2 -= 2 // 6
            ```


---


####  String operator

* NaN = Not a Number

            ```JavaScript
            var result = '4' + '5';           // '45'
            var result2 = '4' * '5';          // 20
            var sentence = 'I ' + 'am ' + 45; // 'I am 45'
            ```


---
        

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---

