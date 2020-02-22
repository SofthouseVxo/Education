<!doctype html>
<html>
	<head>
		<title>JavaScript - Classes and OOP</title>
		<meta charset="utf-8">
		<meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="maxSpeed=device-maxSpeed, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

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

### 20. JavaScript</h3>
##### Classes & OOP</h5>

---


#### Programming Paradigms</h4>
					<ol>
            <li>Procedural Programming</li>
            <li>Object Oriented Programming</li>
            <li>Functional Programming (Focus on this in React course).</li>
          </ol>

---


#### Procedural Programming</h4>
          <ul>
            <li>Top to bottom line by line.</li>
            <li>When project gets bigger it gets messy.</li>
            <li>Hard to find bugs.</li>
          </ul>

---


#### Object oriented programming</h4>
          <ul>
            <li>Object oriented programming follows real-world modelling.</li>
            <li>An application consisting of child objects which are interacting with each other to form the product.</li>
            <li>Real world examples - car, computer</li>
          </ul>

---


#### Object oriented programming</h4>
          <ul>
            <li>Encapsulate the code.</li>
            <li>Divides code into units (objects).</li>
            <li>It reduces complexity.</li>
            <li>The code gets easier to read.</li>
          </ul>

---


#### Procedural vs OOP</h4>
  <img style="width: 800px;" src="../../media/javascript-images/javascript-20/proceoop.png" alt="procedural & oop">

---


#### Making Ping Pong OOP</h4>
          <ul>
            <li>What parts can we encapsulate?</li>
            <li>What parts have functionality which belongs to them and no other?</li>
            <li>Which parts can have some shared functionality?</li>
          </ul>
  <img style="width: 600px;" src="../../media/javascript-images/javascript-20/ping1.png" alt="Ping pong">

---


#### Making Ping Pong OOP</h4>
          <ul>
            <li>What parts can we encapsulate?</li>
            <li>What parts have functionality which belongs to them and no other?</li>
            <li>Which parts can have some shared functionality?</li>
          </ul>
  <img style="width: 600px;" src="../../media/javascript-images/javascript-20/ping2.png" alt="Ping pong">

---


#### JavaScript & OOP</h4>
          <ul>
            <li>JavaScript is a "multi-paradigm language".</li>
            <li>This offers flexibility.</li>
            <li>You can write procedural, class-oriented, or Functional Programming-style JavaScript code.</li>
          </ul>

---
            

#### What is an object?</h4>
          <ul>
            <li>A product that can do things and contains information about its current state.</li>
            <li>Each Object has a purpose and a task.</li>
            <li>Real world examples could be  a <b>lamp</b> or a <b>Human</b>.</li>
          </ul>

---


#### Properties</h4>
          <ul>
            <li>A property is a variable connected to a specific object.</li>
            <li>A property contains information about the object.</li>
          </ul>

---


#### Methods</h4>
          <ul>
            <li>A method is a function connected to a specific object.</li>
            <li>Methods are used to give an object functionality.</li>
          </ul>

---


#### Classes</h4>
          <ul>
            <li>A Class is like a <b>blueprint.</b></li>
            <li>For example a Lamp is created from a blueprint(class).</li>
            <li>Many products are created from blueprints however when created they are <b>individual</b> products(objects).</li>
          </ul>

---


#### Classes</h4>
          <ul>
            <li>Classes are used to create objects.</li>
            <li>A class encapsulates data for the object.</li>
          </ul>

---


####  Declaring a class

            ```JavaScript
            // The ‘this’ keyword refers to the current instance of the class.

            class Car {
              constructor(color, maxSpeed) {
                this.color = color;
                this.maxSpeed = maxSpeed;
              }
            }
            ```


---


#### Constructor</h4>
          <ul>
            <li>All ES6 Classes has a <b>Constructor</b> method</li>
            <li>The constructor method is a special method for creating and initializing an object created with a class.</li>
            <li>The constructor always run once, and its the first thing thats happening.</li>
            <li>There can only be one special method with the name "constructor" in a class.</li>
            <li>It is not mandatory to include a constructor definition. Every class by default has a constructor by default.</li>
          </ul>

---


####  Class Expression

* An expression is any valid unit of code that resolves to a value.

            ```JavaScript
            let Car = class {
              constructor(color, maxSpeed) {
                  this.color = color;
                  this.maxSpeed = maxSpeed;
              }
            }
            ```


---


####  Named class expression

            ```JavaScript
            let Car = class Car {
              constructor(color, maxSpeed) {
                this.color = color;
                this.maxSpeed = maxSpeed;
              }
            }
            ```


---


#### Any number of instance can be created from a class, each instance is called <b>Object</b>.</h4>

---
  

####  Creating Objects from classes

* To create an instance of the class, use the **new** keyword followed by the class name. Following is the syntax for the same.

            ```JavaScript
            let Car = class Car {
              constructor(color, maxSpeed) {
                this.color = color;
                this.maxSpeed = maxSpeed;
              }
            }

            // The new keyword is responsible for instantiation.
            // The right hand side of the expression invokes the constructor.
            let obj = new Car('red',70);

            ```


---
  

####  Methods in classes

            ```JavaScript
            class Car {
              constructor(color, maxSpeed) {
                this.color = color;
                this.maxSpeed = maxSpeed;
              }

              test() {
                console.log('The color of the Car is ',this.color); // red
                console.log('The maximum speed of the Car is ',this.maxSpeed); // 70
              }
            }
            ```


---
  

####  Accessing Methods and properties

* Once the object is instanciated the variables and functions connected to the object are called Properties and Methods.
* These can be accessed using dot notation.

            ```JavaScript
            let carObj = new Car('red',70);
            let color = carObj.color; // red
            let maxSpeed = carObj.maxSpeed; // 70

            carObj.test();
            ```


---


####  Accessing methods and properties

* Properties and methods can only be accessed if the object is instanciated

            ```JavaScript
            class Car {

              test() {
                console.log('Calling the test function');
              }
            }

            // Will throw an Error since Car is not instanciated and just "blueprint"
            Car.test(); // TypeError: Car.test is not a functionindex.


---


#### Inheritance</h4>
          <ul>
            <li>A class can inherit methods and properties from its parent.</li>
            <li>And if we make a change in the parent class, all who inherits from it will also get the change.</li>
          </ul>
					<img style="width: 600px;" src="../../media/javascript-images/javascript-20/classes1.png" alt="inheritance">

---


#### Inheritance</h4>
          <ul>
            <li>A class can inherit methods and properties from its parent.</li>
            <li>And if we make a change in the parent class, all who inherits from it will also get the change.</li>
          </ul>
  <img style="width: 600px;" src="../../media/javascript-images/javascript-20/classes2.png" alt="inheritance">

---


#### Inheritance</h4>
          <ul>
            <li>A class can inherit methods and properties from its parent.</li>
            <li>And if we make a change in the parent class, all who inherits from it will also get the change.</li>
          </ul>
  <img style="width: 600px;" src="../../media/javascript-images/javascript-20/classes3.png" alt="inheritance">

---


  #### Inheritance</h4>
    <img style="width: 300px;" src="../../media/javascript-images/javascript-20/classes4.png" alt="inheritance">
              
            ```JavaScript
            // cow is the new instance and Cow is the class(blueprint)
            let cow = new Cow('muuuh');

            console.log(cow); // { sound: 'muuuh', eat: function, fart: function }

            cow.eat(); // works since it inherits this method
            cow.fart();
            ```


---


####  Inheritance
            
            ```JavaScript
            class Vehicle {
              constructor (type) {
                this.type = type;
              }
             
              getType () {
                return this.type;
              }
            }
            
            class Car extends Vehicle {
              constructor (type) {
                super(type);
              }
             
              getType () {
                return 'It is a car: ' + super.getType();
              }
            }
            
            let car = new Car('Tesla');
            console.log(car.getType()); // It is a car: Tesla
            ```


---


####  Inheritance
            
            ```JavaScript
            class Vehicle {
              constructor (type) {
                this.type = type;
              }
             
              drive () {
                console.log('They see me rollin in my' + this.type);
              }
            }
            
            class Car extends Vehicle {
              constructor (type) {
                super(type);
              }
            }
            
            let car = new Car('Tesla');
            car.drive(); // They see me rollin in my Tesla
            ```


---


####  Getters & Setters

            ```JavaScript
            class Person {
              constructor(name) {
                this._name = name;
              }
            
              get name() {
                return this._name.toUpperCase();
              }
            
              set name(newName) {
                this._name = newName;   // validation could be checked here such as only allowing non numerical values
              }
            }
                     
            let bob = new Person('Bob');
            console.log(bob.name);  // Outputs 'BOB'
            bob.name = 'John';
            ```


---


#### No private properties in ES6</h4>

---


#### Static keyword</h4>
          <ul>
            <li>The static keyword defines static methods for a class.</li>
            <br>
            <li>Static methods are called without instantiating their class.</li>
            <li>Static methods are also not callable when the class is instantiated.</li>
            <li>Static methods are often used to create utility functions for an application.</li>
          </ul>

---


####  Using Static

            ```JavaScript
            class Car {
              static test() {
                console.log('Calling the static test function');
              }
            }

            Car.test(); // "Calling the static test function"

            let carObj = new Car();
            carObj.test(); //TypeError: obj.test is not a function


---


####  This in events in classes

            ```JavaScript
            class Person {
              constructor(){
                // we have to bind this to access it in callOnClick otherwise it will be the document
                this.callOnClick = this.callOnClick.bind(this);

                this.name = 'Jane Doe';
                this.initEvents();
              }
            
              initEvents(){
                document.addEventListener('click', this.callOnClick);
              }
            
              callOnClick(){
                console.log(this.name);
              }
            }
            ```


---


####  This in events in classes

* Arrow Function DOES NOT bind it's own this.
* The this value of the enclosing execution context is used since they lexically bind their context so this actually refers to the originating context.
* Results in that we do not have to bind it.
            
            ```JavaScript
            class Person {
              constructor(){
                this.name = 'Jane Doe';            
                this.initEvents();
              }
            
              initEvents(){
                document.addEventListener('click', this.callOnClickArrow);
              }
            
              callOnClickArrow = () => {
                console.log(this.name);
              }
            }
            ```


---


####  Descriptive Blocks - Commenting Classes

            ```JavaScript
            /** 
  * @desc this class will hold functions for user interaction
  * examples include user_pass(), user_username(), user_age(), user_regdate()
  * @author John Doe johndoe@email.com
  * @required settings.php
*/
            class myWebClass { }
            ```


---


#### So it seems like JavaScript have OOP syntax..</h4>
          <ul>
            <li>Yep, they came with came with ES6</li>
            <li>But how did you write OOP before 2015?</li>
          </ul>

---


#### Prototypes!</h4>
          <ul>
            <li>Under the hood, JavaScript works differently.</li>
            <li>The class syntaxes it just a layer on top.</li>
            <li>JavaScript uses something called prototype pattern.</li>
            <li>We will take a look at this later on, but the main focus will be on OOP JavaScript</li>
            <li>The reason for this is that many other languages leans towards OOP and JavaScript classes are used both in React and Angular.</li>
          </ul>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---

