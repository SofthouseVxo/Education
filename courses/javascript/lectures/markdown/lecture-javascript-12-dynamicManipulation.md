### 12. JavaScript
#### DOM - Dynamic manipulation


---

#### Real examples of when the DOM is edited:

* When content/visuals changes after load without reloading the page.
* Cookie consent modals - show/accept/hide.
* Tradera - placing bid, changing time left.
* Facebook - "like" a post(thumb turns blue).


--- 

#### Browser Object Model(BOM)
<img src="/media/javascript-images/javascript-11/bom.png" alt="Browser Object Model">

---

#### DOM/Node tree
<img src="/media/javascript-images/javascript-11/domtree.png" alt="dom - object model">


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

#### More on the next lecture
#### Dynamic styling & events
