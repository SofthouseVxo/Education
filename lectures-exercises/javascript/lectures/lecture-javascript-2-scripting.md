### 2. JavaScript</h3>
#### Scripting / Programming</h5>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HTML, CSS and JavaScript

* HTML is used to create the basic structure and content of a webpage (the skeleton).
* CSS is used for the design of a webpage – where everything is placed and how it looks (body).
* **JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).**

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Computer Programming

* Programming is a way to “instruct the computer to perform various tasks”.
* You need to use a language that the computer understands.
* The computer will do **EXACTLY** what you tell(type), nothing more nothing less.
* Adding numbers, deleting files, changing what's seen on the screen etc.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

“Everyone in this country should learn to program a computer, because it teaches you to think.” - Steve Jobs

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Upcoming slides provide a broader overview with simplified examples.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Different types of code

* Low-level Machine code
* High level language
* Scripting language

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
				

#### Low-level Machine code

* Understood by Computers not humans.
* Binary codes that consists of 1's and 0's
* Can be executed directly by a computer's CPU.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### High-level language

* Code written gets **compiled** into stand alone applications.
* Can run on different computers and operating systems in different environments (JVM for Java).
* Gets compiled to machine code.
* C, C++, Objective-C, Java.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Script language

* Does not work independently.
* Runs in an client application which **interprets** the code, plugin or server program.
* JavaScript, ActionScript, PHP.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Interpreter

* An interpreter interprets your code into something that the computer can understand.
* This is done line by line on the fly.
* Think of a human translator translating what you say, after you said one sentence she writes down the translation then hands it over to the computer.
* Every time you speak a new sentence, even if it's the same as before, she will write it down again and hand it over.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Compiler

* Interpreting your code into something that the computer can understand.
* Different from the interpreter the compiler doesn’t translate on the fly.
* It works ahead of time to create that translation and write it down.
* Image the human translator again, instead of translating on the fly she writes all you had to say then hands the whole thing over to the computer.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Interpreter vs Compiler

* Interpreters are faster to set up and run first time (no need to write it all down).
* But when you need to do something again, everything is already written down, and we do not need to do it again.
* Compiled Java code that produce a portable (binary) representation of the program is distributed for execution later.
* With JavaScript we distribute the source code, not the binary form.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Just-in-time compilers

* Basically if code runs more often or a lot, it gets compiled.
* Browsers does this in different ways.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Java flow
<img src="/media/javascript-images/javascript-2/java.png" alt="java">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### JavaScript flow
<img  src="/media/javascript-images/javascript-2/js.png" alt="js">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Brief JavaScript History

* Created by Brendan Eich in 1995 during his time at Netscape Communications.
* Netscape Navigator was the most popular browser during the 90's.
* JavaScript was created to allow web developers to embed executable code on their webpages.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What is JavaScript?

* JavaScript has been the only standard language supported by browsers (behold <a href="https://webassembly.org/" target="_blank">WebAssembly</a>).
* JavaScript code is written into an HTML page and **interpreted** by the browser.
* With Runtime environments like **Node.js**, JavaScript can run on machines as well.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### WebAssembly

* Simplified: <a href="https://webassembly.org/docs/faq/" target="_blank">WebAssembly</a> is a way to take code in any programming language and run it within a web browser.
* Initial focus is on C/C++
* All major browsers are on board for now.
* Has been a lot of buzz around it for a while now..


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### JavaScript & Java

* JavaScript is NOT the same as Java.
* JavaScript is named after Java, and many ideas are borrowed from the Java language.
* JavaScript’s syntax is heavily inspired by C++ and Java.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### ECMAScript & JavaScript

* ECMAScript is a Standard for scripting languages.
* JavaScript is the most popular implementation of the ECMAScript Standard.
* Languages like Javascript are based on the ECMAScript standard.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### ECMAScript editions of (ECMA-262)

* ECMAScript 2015 (ES2015) and ES6 WTF?
* ECMAScript 2016 (ES2016) and ES7
* ECMAScript 2017 (ES2017) and ES8
* ECMAScript 2018 (ES2018) and ES9
* ECMAScript 2019 (ES2019) and ES10
* ES.Next (dynamic and references the next version of ECMAScript coming out).


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### New editions

* Each new edition implements some new changes.
* These changes have gone through a process with several steps before being accepted by the TC39 committee.
* The TC39 committe consists of between 50-100 different people from web-invested companies like browser and device makers.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### JavaScript supports **backwards compatibility**
"Backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. Code written in 1995 -- however primitive or limited it may have been! -- should still work today. As TC39 members often proclaim, "we don't break the web!" - <a href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md">YDKJS</a>
**JS is not forwards-compatible!**

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Soo.. What is a script?
A script is a series of instructions that a computer can follow to achieve a goal.
Like a recipe.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Designing a Script

1. Define the goal
1. Design the script
1. Code each step


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Common workflow

1. Write some code.
1. Test if it works as intended.
1. Indentify bugs (when it's not working)
1. Explore solutions (Google, Stack overflow, Blogs, friends etc.)
1. Go to step 1


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Vocabulary & Syntax

* **Vocabulary** - Words that computers understand.
* **Syntax** - How to put those words together to create instructions.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Why JavaScript?

* JavaScript adds interactivity to your website.
  * Response to user actions (clicking buttons etc.).
  * Modifying content.
  * Changing the site dynamically (after its been loaded by the browser).
  * Animating.
  * Fetching data asynchronosly.
	


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Creating JavaScript

* JavaScript is written in plain text.
* JavaScript code can be placed in:
  * Script-tags in the HTML file.
  * A seperate file (.js) which is loaded from a HTML file.
	


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Loading and Running JavaScript

* JavaScript runs where it is found in the code.
* When the browser comes across a script element, it stops to load the script and runs the JS code.

```HTML
<html>
	<head>
		<title>Page Title</title>
	</head>
	<!-- script tag are commented because of reveal.js lib not displaying properly -->
	<!-- <script>console.log('Hello World!');</script> -->
	
	<body>
		<!-- <script src="main.js"></script> -->
		<h1>My First Heading</h1>
		My first paragraph.
	</body >
</html>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Loading and Running JavaScript

* Newer browsers supports defer and async, these attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.

```HTML
<html>
	<head>
		<title>Page Title</title>
	</head>
	<!-- script tag are commented because of reveal.js lib not displaying properly -->
	<!-- <script defer>console.log('Hello Sweden!');</script> -->
	<!-- <script async>console.log('Hello World!');</script> -->

	<body>
		<!-- <script src="main.js"></script> -->
		<h1>My First Heading</h1>
		My first paragraph.
	</body>
</html>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### HTML parsing – analyzing & interpretation

1. HTML code gets parsed until it reaches a script reference.
1. Script is loaded (if it's an external reference).
1. Script runs.
1. HTML parsing continues.

The above is called Direct, this can be also be done asynchronosly, meaning the parser continues while loading the script.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Web Console

* Logs information associated with a web page:
  * network requests
  * JavaScript
  * CSS
  * Security errors
  * Warnings

* It's possible to execute JavaScript expressions from the console.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Web Console
<img style="margin-top: 0px;" src="/media/javascript-images/javascript-2/webconsole.png" alt="web console">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### alert() & prompt() examples

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Documentations

* <a href="https://www.w3schools.com/js/default.asp" target="_blank">W3schools</a>
* <a href="https://developer.mozilla.org/sv-SE/" target="_blank">MDN</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>