<!doctype html>
<html>
	<head>
		<title>4. Backend APIs Node.js</title>
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

					<h3>4.Backend APIs</h3>
					<h5>Node.js</h5>

---
	

				 <h3>What is Node.js</h3>
				 <ul>
					<li>Node.js is a free open source server environment.</li>
					<li>An open source runtime environment.</li>
					<li>Makes it possible to execute javascript outside the browser.</li>
          <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
          <li>Node.js use the v8 engine (same as chrome).</li>
          <li>Node compiles JavaScript code into native code.</li>
				 </ul>
 ---
			 
			 <section>
				 <h4>Node.js</h4>
				 <ul>
					 <li>Is often used to build backend services called APIs.</li>
					 <li>Can also be used a middlewares to handle requests from different systems.</li>
				 </ul>
			 </section>
			 

 #### Node.js</h4>
         <ul>
          <li>Good for I/O intensive tasks (such as sending http requests)</li>
					<li>Non Blocking IO</li>
					<li>Single Threaded</li>
					<li><a href="https://www.youtube.com/watch?v=jOupHNvDIq8" target="_blank">Mosh Explains</a></li>
					<li>Has a package manager too, npm</li>
				</ul>
 ---

			 <section data-markdown>
				<script type="text/template">
					#### Try it
					
					Run in terminal
					```Shell
					$ node -v
					$ npm -v
					$ npm install npm@latest -g
					```
				</script>
			</section>

			<section>
				<h4>Node package manager (npm)</h4>
				<ul>
					<li>Adds dependencies</li>
					<ul>
						<li>Specifies dependencies in package.json</li>
						<li>adds dependency files to node_modules</li>
						<li>node_modules is generally ignored by git, need to run npm install after clone</li>
					</ul>
					<li>npm install --save mongoose</li>
					<ul>
						<li>Adds to package.json</li>
						<li>installs to node_modules</li>
					</ul>
					<li>import dependencies using</li>
					<ul>
						<li>const mongoose = require(“mongoose”)</li>
						<li>const mongoose = import ”mongoose”</li>
					</ul>
				</ul>
			</section>


						#### Node
						
						* Create an index.js file.
						* Add some javascript code that logs something.

						```Shell
						$ node index.js
						```


---


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


						#### Node modules
						
						* Can import stuff from each other.
						* Need to be exported to be imported.

						lib.js
						```JavaScript
						module.exports = 10;
						```

						main.js
						```JavaScript
						const someValue = require('./lib');
						console.log(someValue); // 10
						```


---


						#### Node modules

						lib.js
						```JavaScript
						const first = 1;
						const second = 2;
						module.exports.firstValue = first;
						module.exports.secondValue = second;
						```

						main.js
						```JavaScript
						const {firstValue, secondValue} = require('./lib');
						console.log(firstValue); // 1
						console.log(secondValue); // 1
						```


---



						#### Node modules

						lib.js
						```JavaScript
						const first = 1;
						const second = 2;
						module.exports = {
							firstValue: first,
							secondValue: second
						}:
						```

						main.js
						```JavaScript
						const {firstValue, secondValue} = require('./lib');
						console.log(firstValue); // 1
						console.log(secondValue); // 1
						```


---
				

						#### Node modules

						lib.js
						```JavaScript
						const sayHello = ()=>{
							console.log('Hello world!');
						}
						
						const sayBye = ()=>{
							console.log('Bye Bye!');
						}
						
						module.exports = {
							sayHello
						};
						```

						main.js
						```JavaScript
						const { sayHello } = require('./lib');

						sayHello(); // Hello world!
						```


---


						#### Node modules

						lib.js
						```JavaScript
						const sayHello = ()=>{
							console.log('Hello world!');
						}
						
						const sayBye = ()=>{
							console.log('Bye Bye!');
						}
						
						module.exports = {
							sayHello
						};
						```

						main.js
						```JavaScript
						const { sayHello, sayBye } = require('./lib');

						sayHello(); // Hello world!
						sayBye(); // TypeError: sayBye is not a function
						```


---

				<section data-markdown>
					<script type="text/template">
						#### Globals
						
						* Since we do not run Node in the browser we don't have a window object.
						* However Node also provides global objects called globals.
						* <a href="https://nodejs.org/api/globals.html" target="_blank">Content of the global object</a>
						
						index.js
						```JavaScript
						console.log(global);
						```
						
						Shell
						```Shell
						$ node index.js
						```
					</script>

---
	
				<section data-markdown>
					<script type="text/template">
						#### Process

						* The process object is a global that provides information about, and control over, the current Node.js process.
						* Since it's a global it is always available to Node.js applications without using require().

						index.js
						```JavaScript
						console.log(process);
						```
					</script>

---
	
				<section data-markdown>
					<script type="text/template">
						#### Command line arguments

						index.js
						```JavaScript
						console.log('Arguments', process.argv);
						```

						Shell
						```Shell
						$ node index.js hello world
						```

						Logs
						```Shell
						Arguments [
							'/Users/nisse/.nvm/versions/node/v12.14.0/bin/node',
							'/Users/nisse/Desktop/node_course/playground/index.js',
							'hello',
							'world'
						]
						```
					</script>

---
	
				<section data-markdown>
					<script type="text/template">
						#### Command line arguments

						```Shell
						npm i yargs
						```

						index.js
						```JavaScript
						const argv = require('yargs').argv
								
						console.log(argv);
						```

						Shell
						```Shell
						$ node index.js --phrase=hello
						```
					</script>

---
	
	
	
				<section data-markdown>
					<script type="text/template">
						#### Reading from file

						* fs = <a href="https://nodejs.org/api/fs.html" target="_blank">File System</a>

						index.js
						```JavaScript
						const fs = require('fs');

						const dataBuffer = fs.readFileSync('1-json.json');
						const dataJSON = dataBuffer.toString();

						const data = JSON.parse(dataJSON);

						console.log(dataJSON); // { name: 'nisse' }
						console.log(data.name); // nisse
						```

						info.json
						```JSON
						{
							"name": "nisse"
						}
						```
					</script>

---
	
				<section data-markdown>
					<script type="text/template">
						#### Write to file

						index.js
						```JavaScript
						const fs = require('fs');

						fs.writeFile('message.txt', 'Hello Node.js', 'utf8', ()=>{console.log('done')});
						```

						message.txt
						```
						Hello Node.js
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### JavaScript versions
						"Node.js is built against modern versions of V8. By keeping up-to-date with the latest releases of this engine, we ensure new features from the JavaScript ECMA-262 specification are brought to Node.js developers in a timely manner, as well as continued performance and stability improvements." - <a href="https://nodejs.org/en/docs/es6/" target="_blank">Node.js docs</a>
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Node.js provides a lot of functionality that we will use during the course.
					</script>

---

