### 12. JavaScript
##### DOM - Dynamic manipulation

---

#### Real examples of when the DOM is edited:

* When content/visuals changes after load without reloading the page.
* Cookie consent modals - show/accept/hide.
* Tradera - placing bid, changing time left.
* Facebook - "like" a post(thumb turns blue).

--- 

#### Browser Object Model(BOM)
<img style="margin-top: 0px; width: 600px;" src="/new/media/javascript-images/javascript-8/bom.png" alt="Browser Object Model">

---

#### DOM/Node tree
<img style="margin-top: 0px;" src="/new/media/javascript-images/javascript-8/domtree.png" alt="dom - object model">

---

####  Updating text nodes

```JavaScript
let myText = document.getElementById('my-text');

console.log(myText); // <p id="my-text">Hello</p>
console.log(myText.firstChild); // #text "Hello"
console.log(myText.firstChild.nodeValue); //Hello

// Update the text in the node
myText.firstChild.nodeValue = 'Bye';
```

---

####  3 ways of working with element nodes **content**

* These are all properties that we can set.
  * **innerHTML** - Gets/sets text & markup
  * **textContent** - Gets/sets text only
  * **innerText** - Gets/sets text only

* Using any of these will overwrite the entire content of the element(both text and markup).

---

####  ```textContent```

* **textContent** - Gets/sets text only

```JavaScript
let myText = document.getElementById('my-text');

console.log(myText); // <p id="my-text">Hello</p>
console.log(myText.textContent); // Hello

// Update the text in the node
myText.textContent = 'Bye';
```

---

####  ```innerText```

* **innerText** - Gets/sets text only
* innerText does not return the content of script and style elements.
* innerText will not return the text of elements that are hidden with CSS (textContent will).

```JavaScript
let myText = document.getElementById('my-text');

console.log(myText); // <p id="my-text">Hello</p>
console.log(myText.innerText); // Hello

// Update the text in the node
myText.innerText = 'Bye';
```

---

####  Adding and removing HTML content with innerHTML

* innerHTML can be used to retrieve and replace content on any element node.
* Adds content by strings like ```"<p>Hello world</p>"```.
* Remove content by setting and empty string.

```JavaScript
let myContainer = document.getElementById('container');

myContainer.innerHTML = '<p>Hello world</p>';
```

---

#### Manipulating the DOM

---

####  Creating elements

```JavaScript
// Creating an element, however this does NOT make the browser render it.
let myButton = document.createElement("button");

myButton.setAttribute("id", "my-button");
myButton.innerHTML = "";
```

---

####  Adding the element to the DOM structure

```JavaScript
// myButton will now be added inside the body.
document.body.appendChild(myButton);
```

---

####  Removing an element from the DOM structure

```JavaScript
let element = document.getElementById('target');
element.parentNode.removeChild(element);
```

---

####  Removing an element from the DOM structure

* Does **NOT** work in Internet Explorer!

```HTML
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<div id="div-3">Here is div-3</div>
```

```JavaScript
var elementRef = document.getElementById('div-2');
elementRef.remove(); // Removes the div with the 'div-2' id
```

---

#### Using innerHTML for everything? Think again..

---

####  Cross Site Scripting(XSS)

* XSS involves that an attacker is placing malicious code inte a site.
* This could be done by writing scripts:
  * Inside inputs in forms (comments, personal info etc.).
  * File uploads like images and videos.
  * Third party sites like Facebook, Twitter and other feeds.

---

####  Cross Site Scripting(XSS)

* What can attackers access?
  * The DOM (form data)
  * Cookies/Storage (some sites store user data in these)
  * Session tokens (could be login data)

---

####  Cross Site Scripting(XSS) with innerHTML

```JavaScript
// This won't execute
let div = document.querySelector('#some-div');
<!-- div.innerHTML = '<script>alert("XSS Attack");</script>'; -->
```

```JavaScript
// This WILL run if the script is loaded after page load like from third party.
<!-- div.innerHTML = '<script deferred>alert("XSS Attack");</script>'; -->

// This will, too
<!-- div.innerHTML = '<img src=x onerror="alert(\'XSS Attack\')">'; -->
```

---
  
#### XSS case

1. You got a comment field on your site.
1. Instead of normal comment a user posts a script tag with malicious code.
1. User submits comment and the comment is saved in a database on a server.
1. Page reloads and when it renders the new comment JS code runs with the new malicious code

---

#### Third party libraries

* Many sites use third party js libraries for example Analytic, A/B testing, Marketing tools etc.
* Even if you write your code correctly some of these scripts could be vulnerable.

---

#### So what to do?

* Validate inputs - not allowing certain characters.
* Validate both in front end and server side (since users could bypass frontend validation).
* Don´t create DOM fragments containing HTML from untrusted sources.
* Escape characters like < and > etc.

---

#### innerHTML & XSS

* Only use innerHTML when:
  * You control all the markup being generated (no user content!).
  * If you do the users content has to be escaped and added as text rather than HTML!

---

#### .innerHTML property

* Advantages:
  * Able to add a lot of new markup with less code.
  * Can be faster when adding a lot of new markup.
  * Simple way to remove all content from one element.
  
* Disadvantages:
  * Should <b>NEVER</b> be used to add content from a user.
  * Can be difficult to isolate single elemnts within a larger DOM fragment.
  * Event Handler may no longer work as intended.

---

#### DOM Manipulation

* Advantages:
  * Is suited to changing on element from a DOM fragment where the are many sibling.
  * Does no effect eventhandlers.
  * Easy to add a elements incrementally with scripts.
  
* Disadvantages:
  * Is slower than the innerHTML property if you have to make alot of changes to the content of the page.
  * You need to write more cote to achieve the same as with innerHTML.
  
---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>