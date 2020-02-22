<!doctype html>
<html>
	<head>
		<title>2. JavaScript - Scripting 

					<h3>2. JavaScript</h3>
					<h5>Scripting / Programming</h5>

---


#### HTML, CSS and JavaScript</h4>
					<ul>
						<li>HTML is used to create the basic structure and content of a webpage (the skeleton).</li>
						<li>CSS is used for the design of a webpage – where everything is placed and how it looks (body).</li>
						<li><b><u>JavaScript is used to define the interactive elements of a webpage making it dynamic (muscles).</u></b></li>
					</ul>

---


#### Computer Programming</h4>
					<ul>
						<li>Programming is a way to “instruct the computer to perform various tasks”.</li>
						<li>You need to use a language that the computer understands.</li>
						<li>The computer will do <b>EXACTLY</b> what you tell(type), nothing more nothing less.</li>
						<li>Adding numbers, deleting files, changing what's seen on the screen etc.</li>
					</ul>

---


					<p><i>“Everyone in this country should learn to program a computer, because it teaches you to think.”</i> - Steve Jobs</p>

---


#### Upcoming slides provide a broader overview with simplified examples.</h4>

---


#### Different types of code</h4>
					<ul>
						<li>Low-level Machine code</li>
						<li>High level language</li>
						<li>Scripting language</li>
					</ul>

---
				

#### Low-level Machine code</h4>
					<ul>
						<li>Understood by Computers not humans.</li>
						<li>Binary codes that consists of 1's and 0's</li>
						<li>Can be executed directly by a computer's CPU.</li>
					</ul>

---


#### High-level language</h4>
					<ul>
						<li>Code written gets <u>compiled</u> into stand alone applications.</li>
						<li>Can run on different computers and operating systems in different environments (JVM for Java).</li>
						<li>Gets compiled to machine code.</li>
						<li>C, C++, Objective-C, Java.</li>
					</ul>

---


#### Script language</h4>
					<ul>
						<li>Does not work independently.</li>
						<li>Runs in an client application which <u>interprets</u> the code, plugin or server program.</li>
						<li>JavaScript, ActionScript, PHP.</li>
					</ul>

---


#### Interpreter</h4>
					<ul>
						<li>An interpreter interprets your code into something that the computer can understand.</li>
						<li>This is done line by line on the fly.</li>
						<li>Think of a human translator translating what you say, after you said one sentence she writes down the translation then hands it over to the computer.</li>
						<li>Every time you speak a new sentence, even if it's the same as before, she will write it down again and hand it over.</li>
					</ul>

---


#### Compiler</h4>
					<ul>
						<li>Interpreting your code into something that the computer can understand.</li>
						<li>Different from the interpreter the compiler doesn’t translate on the fly.</li>
						<li>It works ahead of time to create that translation and write it down.</li>
						<li>Image the human translator again, instead of translating on the fly she writes all you had to say then hands the whole thing over to the computer.</li>
					</ul>

---


#### Interpreter vs Compiler</h4>
					<ul>
						<li>Interpreters are faster to set up and run first time (no need to write it all down).</li>
						<li>But when you need to do something again, everything is already written down, and we do not need to do it again.</li>
						<li>Compiled Java code that produce a portable (binary) representation of the program is distributed for execution later.</li>
						<li>With JavaScript we distribute the source code, not the binary form.</li>
					</ul>

---


#### Just-in-time compilers</h4>
					<ul>
						<li>Basically if code runs more often or a lot, it gets compiled.</li>
						<li>Browsers does this in different ways.</li>
					</ul>

---


#### Java flow</h4>
  <img src="/new/media/javascript-images/javascript-2/java.png" alt="java">

---


#### JavaScript flow</h4>
  <img  src="/new/media/javascript-images/javascript-2/js.png" alt="js">

---


#### Brief JavaScript History</h4>
					<ul>
						<li>Created by Brendan Eich in 1995 during his time at Netscape Communications.</li>
						<li>Netscape Navigator was the most popular browser during the 90's.</li>
						<li>JavaScript was created to allow web developers to embed executable code on their webpages.</li>
					</ul>

---


#### What is JavaScript?</h4>
					<ul>
						<li>JavaScript has been the only standard language supported by browsers (behold <a href="https://webassembly.org/" target="_blank">WebAssembly</a>).</li>
						<li>JavaScript code is written into an HTML page and <u>interpreted</u> by the browser.</li>
						<li>With Runtime environments like <u>Node.js</u>, JavaScript can run on machines as well.</li>
					</ul>

---


#### WebAssembly</h4>
					<ul>
						<li>Simplified: <a href="https://webassembly.org/docs/faq/" target="_blank">WebAssembly</a> is a way to take code in any programming language and run it within a web browser.</li>
						<li>Initial focus is on C/C++</li>
						<li>All major browsers are on board for now.</li>
						<li>Has been a lot of buzz around it for a while now..</li>
					</ul>

---


#### JavaScript & Java</h4>
					<ul>
						<li>JavaScript is NOT the same as Java.</li>
						<li>JavaScript is named after Java, and many ideas are borrowed from the Java language.</li>
						<li>JavaScript’s syntax is heavily inspired by C++ and Java.</li>
					</ul>

---


#### ECMAScript & JavaScript</h4>
					<ul>
						<li>ECMAScript is a Standard for scripting languages.</li>
						<li>JavaScript is the most popular implementation of the ECMAScript Standard.</li>
						<li>Languages like Javascript are based on the ECMAScript standard.</li>
					</ul>

---


#### ECMAScript editions of (ECMA-262)</h4>
					<ul>
						<li>ECMAScript 2015 (ES2015) and ES6 WTF?</li>
						<li>ECMAScript 2016 (ES2016) and ES7</li>
						<li>ECMAScript 2017 (ES2017) and ES8</li>
						<li>ECMAScript 2018 (ES2018) and ES9</li>
						<li>ECMAScript 2019 (ES2019) and ES10</li>
						<li>ES.Next (dynamic and references the next version of ECMAScript coming out).</li>
					</ul>

---


#### New editions</h4>
					<ul>
						<li>Each new edition implements some new changes.</li>
						<li>These changes have gone through a process with several steps before being accepted by the TC39 committee.</li>
						<li>The TC39 committe consists of between 50-100 different people from web-invested companies like browser and device makers.</li>
					</ul>

---


#### JavaScript supports <u>backwards compatibility</u></h4>
					<p>"Backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. Code written in 1995 -- however primitive or limited it may have been! -- should still work today. As TC39 members often proclaim, "we don't break the web!" - <a href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md">YDKJS</a></p>
					<p><u>JS is not forwards-compatible!</u></p>

---


#### Soo.. What is a script?</h4>
					<p>A script is a series of instructions that a computer can follow to achieve a goal.</p>
					<p>Like a recipe.</p>

---


#### Designing a Script</h4>
					<ol>
						<li>Define the goal</li>
						<li>Design the script</li>
						<li>Code each step</li>
					</ol>

---


#### Common workflow</h4>
					<ol>
						<li>Write some code.</li>
						<li>Test if it works as intended.</li>
						<li>Indentify bugs (when it's not working)</li>
						<li>Explore solutions (Google, Stack overflow, Blogs, friends etc.)</li>
						<li>Go to step 1</li>
					</ol>

---


#### Vocabulary & Syntax</h4>
					<ul>
						<li><b>Vocabulary</b> - Words that computers understand.</li>
						<li><b>Syntax</b> - How to put those words together to create instructions.</li>
					</ul>

---


#### Why JavaScript?</h4>
					<ul>
						<li>JavaScript adds interactivity to your website.</li>
						<ul>
							<li>Response to user actions (clicking buttons etc.).</li>
							<li>Modifying content.</li>
							<li>Changing the site dynamically (after its been loaded by the browser).</li>
							<li>Animating.</li>
							<li>Fetching data asynchronosly.</li>
						</ul>
					</ul>

---


#### Creating JavaScript</h4>
					<ul>
						<li>JavaScript is written in plain text.</li>
						<li>JavaScript code can be placed in:</li>
						<ul>
							<li>Script-tags in the HTML file.</li>
							<li>A seperate file (.js) which is loaded from a HTML file.</li>
						</ul>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
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
								<p>My first paragraph.</p>
							</body >
						</html>
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
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
								<p>My first paragraph.</p>
							</body>
						</html>
						```
					</script>

---


#### HTML parsing – analyzing & interpretation</h4>
					<ol>
						<li>HTML code gets parsed until it reaches a script reference.</li>
						<li>Script is loaded (if it's an external reference).</li>
						<li>Script runs.</li>
						<li>HTML parsing continues.</li>
					</ol>

					<p>The above is called Direct, this can be also be done asynchronosly, meaning the parser continues while loading the script.</p>

---


#### Web Console</h4>
          <ul>
            <li>Logs information associated with a web page:
              <ul>
                <li>network requests</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Security errors</li>
                <li>Warnings</li>
              </ul>
            <li>It's possible to execute JavaScript expressions from the console.</li>
          </ul>

---


#### Web Console</h4>
					<img style="margin-top: 0px;" src="/new/media/javascript-images/javascript-2/webconsole.png" alt="web console">

---


#### alert() & prompt() examples</h4>

---


#### Documentations</h4>
					<ul>
						<li><a href="https://www.w3schools.com/js/default.asp" target="_blank">W3schools</a></li>
						<li><a href="https://developer.mozilla.org/sv-SE/" target="_blank">MDN</a></li>
					</ul>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---

