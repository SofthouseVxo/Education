<!doctype html>
<html>
	<head>
		<title>JavaScript - Prototypes & Modules</title>
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

### 22. JavaScript</h3>
##### Prototypes & Modules</h5>

---


#### Prototypes vs ES6 Classes</h4>
          <ul>
            <li>So far we have worked with JavaScript and ES6 Classes.</li>
            <li>But as mentioned earlier JS Classes are just syntactical sugar over JavaScript's existing prototype-based inheritance.</li>
            <li>In this lecture we will dig deeper into what the prototype pattern really is.</li>
          </ul>

---


#### <a href="http://developer-interview.com/p/oop-ood/what-are-advantages-and-disadvantages-of-prototypal-oop-12" target="_blank">Prototype OOP vs Class OOP Pros and Cons</a></h4>

---


  #### Constructor functions</h4>
              
* Using the "new" keyword an object will be created.
* An instance of the Person (class) will be created.

            ```JavaScript
            function Person(first, last, age) {
              this.firstName = first;
              this.lastName = last;
              this.age = age;
            }
            ```

            ```JavaScript
            let mySister = new Person('Jane', 'Doe', 50); // { firstName: 'Jane', lastName: 'Doe', age : 50}
            ```



---


  #### Prototypal inheritance</h4>
              
* Since functions are objects in JavaScript we can attach methods and properties to them.
* Functions has a special property called <u>prototype</u>.
* Initially it consists of an clean object but we are able to add to this object.

            ```JavaScript
            function Person(first, last) {
              this.firstName = first;
              this.lastName = last;
            }
            
            Person.prototype.eat = function(){
              console.log('Im eating!');
            };
            ```

            ```JavaScript
            let mySister = new Person('Jane', 'Doe');
            mySister.eat(); // 'Im eating!'
            ```


--- 


#### The prototype</h4>
          <p>"The prototype is just a way of saying that for this object use this other object as a backup." - <a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q">FunFunFunctions</a></p>
          <p>"if someone calls my object with a property that does not exist on my object go look in this other object that is what the prototype is set to" -<a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"> FunFunFunctions</a></p>

---
        

  #### Prototypal inheritance</h4>

            ```JavaScript
            function Person(first, last) {
              this.firstName = first;
              this.lastName = last;
            }
            
            let Human = {
              eat : function(){
                console.log('Im eating!');
              },
              run : function(){
                console.log('Im running!');
              }
            }
            
            Person.prototype = Human;
            ```

            ```JavaScript
            let mySister = new Person('Jane', 'Doe');
            mySister.eat(); // 'Im eating!'
            mySister.run(); // 'Im running!'
            ```


---


  #### Creating objects using Object.create( )</h4>
           
* Object.create( ) creates a new object, using an existing object as the prototype of the newly created object.

            ```JavaScript              
            const person = {
              isHuman: false,
              eat : function(){
                console.log('Im eating!');
              }
            };
            ```

            ```JavaScript
            const me = Object.create(person);
            
            me.name = "Robin"; // "name" is a property set on "me", but not on "person"
            me.isHuman = true; // inherited properties can be overwritten
            
            me.eat(); // 'Im eating!'
            ```


---



#### Creating objects using Object.create( )</h4>

          ```JavaScript              
          function Human(){
            this.bloodTemp = 'warm';
          }
          
          function Person(first){
            Human.call(this);
            this.first = first;
          }
          
          Human.prototype.eat = function(){
            console.log('Im eating!');
          }
          
          Person.prototype = Object.create(Human.prototype);
          ```

          ```JavaScript
          let mySister = new Person('Jane');
          console.log(mySister.bloodTemp); // 'warm'
          mySister.eat(); // 'Im eating!'
          ```
        </script>

---


#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto1.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto2.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto3.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto4.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto5.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto6.png" alt="prototype chain">          
---

#### Prototype chain</h4>
<img style="width: 800px;" src="../../media/javascript-images/javascript-22/proto7.png" alt="prototype chain">          
---

        <!-- Many prototype-based systems encourage the alteration of prototypes during run-time, whereas only very few class-based object-oriented systems (such as the dynamic object-oriented system, Common Lisp, Dylan, Objective-C, Perl, Python, Ruby, or Smalltalk) allow classes to be altered during the execution of a program.  -->


#### Modules</h4>
        <ul>
          <li>Small units of independent, encapsulated, reusable code.</li>
          <li>A module is just a file. One script is one module.</li>
          <li>Modules can:</li>
          <ul>
            <li>Load each other</li>
            <li>Call functions of one module from another one:</li>
          </ul>
        </ul>

---


####  Modules (ES5)

* Immediately Invoked Function Expression (IIFE)

            ```JavaScript
            (function(){
              console.log('test');
            })();
            ```


---


#### IIFE</h4>
          <ul>
            <li>The function expression returns the function, so we can immediately call it.</li>
            <li>IIFE encapsulates code complexity inside them.</li>
            <li>Variables defined inside the IIFE don't pollute the global scope.</li>
            <li>var statements inside the IIFE remain within the IIFE's closure.</li>
          </ul>

---



####  Modules (ES5) - Revealing Module pattern

* What we return will be public (an object).
* Everything declared inside the IIFE that's not returned will be private.

            ```JavaScript
            // Expose module as global variable
            let singleton = function(){
    
              // Inner logic
              function sayHello(){
                console.log('Hello');
              }
    
              // Expose API
              return {
                sayHello: sayHello
              }
            }()

            singleton.sayHello();
            ```


---



####  Modules (ES5) - Revealing Module pattern

            ```JavaScript
            // Expose module as global variable
            let singleton = function(){
              let name = 'John Doe';

              // Inner logic
              function sayHello(){
                console.log(name);  // John doe - since its in the IIFE
              }
    
              // Expose API
              return {
                sayHello: sayHello
              }
            }()

            singleton.sayHello();
            singleton.name; // undefined since its private
            ```


---


#### Since ES6 JavaScript has <a href="https://exploringjs.com/es6/ch_modules.html#sec_overview-modules" target="_blank">built-in modules.</a></h4>

---


#### Export and Import</h4>
          <ul>
            <li>The <u>export</u> keyword labels variables and functions that should be accessible from outside the current module.</li>
            <li>The <u>import</u> allows to import functionality from other modules.</li>
          </ul>

---


####  ES6 Modules

            index.html
            ```HTML
              <!-- <script src="someNameModule.js" type="module"></script>  import javascript file and type module needed -->
              <!-- <script src="index.js" type="module"></script>  import javascript file and type module needed -->
            ```
            index.js
            ```JavaScript
            import { name } from './someNameModule.js';
            ```

            someNameModule.js
            ```JavaScript
            export const name = 'Jane Doe';
            ```


---


####  ES6 Modules

* import & export
            index.js
            ```JavaScript
            import { name } from './someNameModule.js';
            ```

            someNameModule.js
            ```JavaScript
            export const name = 'Jane Doe';
            ```


---


####  ES6 Modules

* default import/export

            index.js
            ```JavaScript
            import name from './someNameModule.js';
            ```

            someNameModule.js
            ```JavaScript
            export default const name = 'Jane Doe';
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
