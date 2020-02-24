### 14. JavaScript
#### Events


---

#### Dom Events
* The browser registers different events that occur
* Examples of events
  * When a user clicks the mouse.
  * When a web page finished loading.
  * When an image has been loaded.
  * When the mouse moves over an element.
  * When an input field is changed.
  * When an HTML form is submitted.
  * When a user strokes a key.
  * <a href="https://www.w3schools.com/tags/ref_eventattributes.asp">List of all events</a>.


---

#### Event Handling
* Using built in functionality to listen to a specific event.
* And then respond (running javascript code) when this event occurs.


---

#### Events terms
* When events occur they often said to be "fired" or "raised".
* In turn they "trigger" a function or a script.


---

#### Event Handling
* Involves 3 steps:
  1. Select the **Element(s)** you cant the script to respond to.
  1. Indicate which **Event** on the selected element will **trigger** the response.
  1. Set the **Code** you want to run when the event occurs.


---   


#### Event Handling
<img src="/new-structure/media/javascript-images/javascript-14/eventSteps.png" alt="Event handling">

---

####  Events type examples

* **load** - Triggers when page and assets has finished loading.
* **click** - Triggers when user clicks the mouse over the page or element.
* **keypress** - Triggers when a certain key is pressed.


---

#### There are 3 ways of handling events:
1. HTML event handlers.
1. Traditional DOM event handlers.
1. Event listeners.


---

####  HTML event handlers

* As an inline attribute.
* Bad practice since we want to seperate HTML and JavaScript code.
* Could be found in old code.

```HTML
<button onclick="someFunction()">Click me!</button>
```



---

####  Traditional DOM event handlers

* Better than HTML event handlers since it's possible to seperate HTML & JavaScript.
* However this way has some limitations when binding multiple events.

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
let button = document.getElementById('myButton');
button.onclick = function(){console.log('This works')};
```


---

####  Eventlisteners

* Seperates HTML & JavaScript.
* Is possible to trigger multiple functions.
* Throughout the course we will use eventlisteners.

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
let button = document.getElementById('myButton');

button.addEventListener('click', function(event){
  console.log(event.target);
}, false);
```


---

####  ```addEventListener()```

* addEventListener takes 3 arguments
  1. Event type.
  2. Callback function (the function which gets called when the event occurs).
  3. Event flow (will be discussed late in the course).

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
function onButtonClicked (event) {
  console.log(event);
}

let button = document.getElementById('myButton');
button.addEventListener('click', onButtonClicked, false);
```


---

####  The event object

* Is sent from every event as an argument.
* Contains information about the event that occured.
* Is an object with properties and methods like target, type, preventDefault etc.

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
function onButtonClicked (event) {
  console.log(event.target); // The element that was clicked (<button id="myButton">Button1</button>)*/
  console.log(event.type); // event type (click)*/
}

let button = document.getElementById('myButton');
button.addEventListener('click', onButtonClicked, false);
```


---

#### DOMContentLoaded & Load events
    
* The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images.
* The load event can be used to detect a fully-loaded page.

```JavaScript
document.addEventListener('DOMContentLoaded', function() {
// code...
});

window.addEventListener('load', function() {
// code...
});
```


---

#### Event capturing and bubbling
<img src="/new-structure/media/javascript-images/javascript-14/bubbling.png" alt="event bubbling">


---

####  ```preventDefault()``` and ```stopPropagation()```

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
function onButtonClicked (event) {
  event.preventDefault(); // prevent default behaviour
  event.stopPropagation(); // Stops the event from bubbling or capturing
}

let button = document.getElementById('myButton');
button.addEventListener('click', onButtonClicked);
```


---

####  Stop listening to an event

```HTML
<button id="myButton">Click me!</button>
```

```JavaScript
function onButtonClicked (event) {
  console.log(event);
}

let button = document.getElementById('myButton');
button.addEventListener('click', onButtonClicked);

button.removeEventListener('click', onButtonClicked); // Stops listening
```


---

####  Callbacks and "this"

* In an event, this refers to the element that received the event.

```HTML
<button id="myButton">Say name!</button>
```

```JavaScript
let person = {
  name: 'Jane Doe',
  sayName: function() {
    console.log(this.name);
  }
}

let button = document.getElementById('myButton');
button.addEventListener('click', person.sayName.bind(person));
```


---

#### Single threaded
* One command at a time.
* JavaScript behaves in a single threaded manner.


---

#### Synchronos execution
* One at a time.
* In the JavaScript runtime environment only one thing is happening at a time.


---

#### The call stack
#### One thread -> one call stack -> one thing a the time


---

#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-1.png" alt="call stack">


---
#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-2.png" alt="call stack">


---
#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-3.png" alt="call stack">


---
#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-2.png" alt="call stack">


---
#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-1.png" alt="call stack">


---
#### The call stack
<img style="margin-top: 0px; width: 800px;" src="/new-structure/media/javascript-images/javascript-14/callstack-4.png" alt="call stack">


---

#### But what about timeouts and other async stuff?
<p><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">Movie time with Philip Roberts</a></p>


---

#### <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">Link to Loupe where you can see your JS in runtime</a>


---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>