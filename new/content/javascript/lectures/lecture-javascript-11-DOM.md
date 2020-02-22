<!doctype html>
<html>
	<head>
		<title>JavaScript - Document Object Model

### 11. JavaScript</h3>
##### Document Object Model</h5>

---


#### Built in objects</h4>
					<ul>
						<li>Global JavaScript Objects</li>
						<ul>
							<li>Objects that the JavaScript language needs.</li>
							<li>Dates, times etc.</li>
						</ul>
						<li>Browser Object Model</li>
						<ul>
							<li>Contains objects representing the current browser window or tab.</li>
							<li>Browser history and device screen etc.</li>
						</ul>
						<li>Document Object Model</li>
						<ul>
							<li>Uses objects to create a representation of the current page.</li>
							<li>It creates a new object for every element.</li>
						</ul>
					</ul>

---


#### Global JavaScript Objects</h4>
					<img style="margin-top: 0px; width: 600px;" src="/new/media/javascript-images/javascript-11/JSGlobalObjects.png" alt="Global JS Objects">

---

				<section data-markdown>
					<script type="text/template">
						#### Global JavaScript Objects

						```JavaScript
						window.Boolean(1); // true
						Boolean(1); // true

						Math.round(4.7); // 5
						Math.random(); // returns a random number between 1 & 0
						Math.floor(Math.random() * 10); // returns a random number from 0 to 9 

						```
					</script>

---


#### Browser Object Model(BOM)</h4>
					<img style="margin-top: 0px; width: 600px;" src="/new/media/javascript-images/javascript-11/bom.png" alt="Browser Object Model">

---


#### window object example (BOM)</h4>
					<img style="margin-top: 0px; width: 800px;" src="/new/media/javascript-images/javascript-11/window.png" alt="dom - window">

---

				<section data-markdown>
					<script type="text/template">
						#### Browser Object Model(BOM)

						```JavaScript
						window.innerWidth // 2120 or however wide the screen is
						window.screen.width // 1200 or however wide the inner browser window is
						```
					</script>

---


#### window.location (BOM)</h4>
					<img style="margin-top: 0px; width: 800px;" src="/new/media/javascript-images/javascript-11/location.png" alt="dom - window - location">

---


#### The document <b>Object</b> Model(DOM)</h4>
					<ul>
						<li>The current webpage loaded into each window is modelled using a <b>document</b> object.</li>
						<li>The Document Object Model works like a bridge between logic (JavaScript) and Design (HTML).</li>
					</ul>
					<img style="margin-top: 0px; width: 700px;" src="/new/media/javascript-images/javascript-11/document.png" alt="dom - document">

---


#### What is an Object?</h4>
					<ul>
						<li>A group of values(properties, methods) compiled under one name.</li>
						<li>Name Value pairs.</li>
						<li>Properties and Methods .</li>
					</ul>

---


#### Properties examples</h4>
					<ul>
						<li>A variable connected to a specific object.</li>
						<li>A property contains information about the object.</li>
						<li>+ many more...</li>
					</ul>

---


#### Methods examples</h4>
					<ul>
						<li>A function connected to a specific object.</li>
						<li>Methods are used to give an object functionality.</li>
						<li>+ many more..</li>
					</ul>

---


#### DOM tree structure</h4>
					<ul>
						<li>The DOM interface treats HTML document as a tree structure.</li> 
						<li>In this tree structure each node is an object representing a part of the document.</li>
					</ul>

---


#### DOM/Node tree</h4>
					<img style="margin-top: 0px;" src="/new/media/javascript-images/javascript-11/domtree.png" alt="dom - object model">

---

				<section data-markdown>
					<script type="text/template">
						#### DOM node

						* h1 = element node.
						* id = attribute node.
						* Welcome to my site = text node.

						```HTML
						<h1 id="myHeader">Welcome to my site</h1>
						```

						<img style="margin-top: -20px;" src="/new/media/javascript-images/javascript-11/element.png" alt="dom - element node">

					</script>

---


#### The DOM defines:</h4>
					<ul>
						<li>HTML elements as objects.</li>
						<li>Properties for all HTML elements.</li>
						<li>Methods for all HTML elements.</li>
						<li>Events for all HTML elements.</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### Document Properties examples
						* URL - https://www.google.se
						* Charset - UTF-8
						* + many more...

						```JavaScript
						console.log(document.URL);
						console.log(document.charset);
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Document Methods examples 
						* getElementById - access an element with a specific id
						* write - adds new content to the document

						```JavaScript
						document.getElementById('primaryButton'); // gets a reference to a element with id 'primaryButton'

						document.write("Hello World!");  // Writes "Hello World!"
						```
					</script>

---


#### The HTML DOM is an API (Programming Interface) for JavaScript:</h4>
					<ul>
						<li>Add/change/remove HTML elements.</li>
						<li>Add/change/remove HTML attributes.</li>
						<li>Add/change/remove CSS styles.</li>
						<li>Add/change/remove HTML events.</li>
						<li>React to HTML events.</li>
					</ul>

---


#### In what order the web browser work</h4>
					<ol>
						<li>Loads the page as HTML.</li>
						<li>Depending on the HTML it creates a model(DOM) of the page.</li>
						<li>Stores this page in memory.</li>
						<li>Renders the page on the screen.</li>
					</ol>

---


#### Manipulate HTML elements using JavaScript</h4>
					<ul>
						<li>To be able to manipulate an element we first need to locate them.</li>
						<li>An elements id, tag name, class names or CSS selectors can be used to locate elements.</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### Adressing specific elements

						```JavaScript
						document.getElementById('element-id'); // Returns a DOMElement with a specific id

						document.getElementsByTagName('h2'); // Returns a NodeList of all h2 DOMElements

						document.getElementsByClassName('nav-link'); // Returns a NodeList of all DOMElements with the 'nav-link' class

						document.querySelector('.my-class'); // Returns the first DOMElement with the class 'my-class'

						document.querySelectorAll("p.intro"); // This example returns a NodeList of all <p> elements with class="intro".
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Caching DOM Queries

						* Methods like getElementById, getElementsByClassName (methods that finds element) are called **DOM Queries**.
						* Everytime they run the parser needs to find them, to not have to do this everytime you can store the location of the element(s).
						* The variable then stores a reference to where the node is in the DOM tree.
						* This variable can then be used to manipulate the node.

						```JavaScript
						let myElement = document.getElementById('element-id');

						myElement.innerHTML = 'Hello world!';
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### NodeLists

						* When DOM queries return multiple elements they are stored in NodeLists.
						* They are similar to Arrays but they are not Arrays, they are Collections.
						* They are stored in the NodeList in the same order they appear on the site.

						```HTML
						<div id="myContainer">
							<button class="item">Item 1</button>
							<button class="item">Item 2</button>
							<button class="item">Item 3</button>
							<button class="item">Item 4</button> 
						</div>
						```

						```JavaScript
						let items = document.getElementsByClassName('item'); //

						console.log(items); // HTMLCollection(4)
						console.log(buttons[0]); //<button class="item">
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Methods to get children and parent 

						```JavaScript
						element.children; // child ELEMENTS

						element.firstElementChild; // first child ELEMENT

						element.parentElement; // parent ELEMENT
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Methods to get adjacent nodes

						```JavaScript
						element.parentNode; // parent element

						element.childNodes; // one or more elements beneath(childs)

						element.firstChild; // first underlying child

						element.lastChild; // last underlying child
						```
					</script>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---

