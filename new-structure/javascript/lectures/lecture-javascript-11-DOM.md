### 11. JavaScript
#### Document Object Model

---

#### Built in objects

* Global JavaScript Objects
  * Objects that the JavaScript language needs.
  * Dates, times etc.

* Browser Object Model
  * Contains objects representing the current browser window or tab.
  * Browser history and device screen etc.
* Document Object Model
  * Uses objects to create a representation of the current page.
  * It creates a new object for every element.


---

#### Global JavaScript Objects
<img src="/new-structure/media/javascript-images/javascript-11/JSGlobalObjects.png" alt="Browser Object Model"/>


---
#### Global JavaScript Objects

```JavaScript
window.Boolean(1); // true
Boolean(1); // true

Math.round(4.7); // 5
Math.random(); // returns a random number between 1 & 0
Math.floor(Math.random() * 10); // returns a random number from 0 to 9 
```


---

#### Browser Object Model(BOM)
<img src="/new-structure/media/javascript-images/javascript-11/bom.png" alt="Browser Object Model"/>


---

#### window object example (BOM)
<img src="/new-structure/media/javascript-images/javascript-11/window.png" alt="dom - window"/>


---
#### Browser Object Model(BOM)

```JavaScript
window.innerWidth // 2120 or however wide the screen is
window.screen.width // 1200 or however wide the inner browser window is
```


---
#### window.location (BOM)
<img src="/new-structure/media/javascript-images/javascript-11/location.png" alt="dom - window - location"/>


---
#### The document <b>Object</b> Model(DOM)

* The current webpage loaded into each window is modelled using a <b>document</b> object.
* The Document Object Model works like a bridge between logic (JavaScript) and Design (HTML)
<img style="margin-top: 0px; width: 700px;" src="/new-structure/media/javascript-images/javascript-11/document.png" alt="dom - document"/>


---

#### What is an Object?

* A group of values(properties, methods) compiled under one name.
* Name Value pairs.
* Properties and Methods 


---

#### Properties examples

* A variable connected to a specific object.
* A property contains information about the object.
* + many more..


---

#### Methods examples

* A function connected to a specific object.
* Methods are used to give an object functionality.
* + many more.


---

#### DOM tree structure

* The DOM interface treats HTML document as a tree structure. 
* In this tree structure each node is an object representing a part of the document


---

#### DOM/Node tree
<img src="/new-structure/media/javascript-images/javascript-11/domtree.png" alt="dom - object model"/>


---

#### DOM node

* h1 = element node.
* id = attribute node.
* Welcome to my site = text node.

```HTML
<h1 id="myHeader">Welcome to my site</h1>
```

<img src="/new-structure/media/javascript-images/javascript-11/element.png" alt="dom - element node"/>


---
#### The DOM defines:

* HTML elements as objects.
* Properties for all HTML elements.
* Methods for all HTML elements.
* Events for all HTML elements


---
#### Document Properties examples
* URL - https://www.google.se
* Charset - UTF-8
* + many more...

```JavaScript
console.log(document.URL);
console.log(document.charset);
```


---
#### Document Methods examples 
* getElementById - access an element with a specific id
* write - adds new content to the document

```JavaScript
document.getElementById('primaryButton'); // gets a reference to a element with id 'primaryButton'

document.write("Hello World!");  // Writes "Hello World!"
```


---
#### The HTML DOM is an API (Programming Interface) for JavaScript:

* Add/change/remove HTML elements.
* Add/change/remove HTML attributes.
* Add/change/remove CSS styles.
* Add/change/remove HTML events.
* React to HTML events


---
#### In what order the web browser work

1. Loads the page as HTML.
1. Depending on the HTML it creates a model(DOM) of the page.
1. Stores this page in memory.
1. Renders the page on the screen.


---

#### Manipulate HTML elements using JavaScript

* To be able to manipulate an element we first need to locate them.
* An elements id, tag name, class names or CSS selectors can be used to locate elements


---
#### Adressing specific elements

```JavaScript
document.getElementById('element-id'); // Returns a DOMElement with a specific id

document.getElementsByTagName('h2'); // Returns a NodeList of all h2 DOMElements

document.getElementsByClassName('nav-link'); // Returns a NodeList of all DOMElements with the 'nav-link' class

document.querySelector('.my-class'); // Returns the first DOMElement with the class 'my-class'

document.querySelectorAll("p.intro"); // This example returns a NodeList of all <p> elements with class="intro".
```


---
#### Caching DOM Queries

* Methods like getElementById, getElementsByClassName (methods that finds element) are called **DOM Queries**.
* Everytime they run the parser needs to find them, to not have to do this everytime you can store the location of the element(s).
* The variable then stores a reference to where the node is in the DOM tree.
* This variable can then be used to manipulate the node.

```JavaScript
let myElement = document.getElementById('element-id');

myElement.innerHTML = 'Hello world!';
```


---
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


---
#### Methods to get children and parent 

```JavaScript
element.children; // child ELEMENTS

element.firstElementChild; // first child ELEMENT

element.parentElement; // parent ELEMENT
```



---
#### Methods to get adjacent nodes

```JavaScript
element.parentNode; // parent element

element.childNodes; // one or more elements beneath(childs)

element.firstChild; // first underlying child

element.lastChild; // last underlying child
```


---
### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>