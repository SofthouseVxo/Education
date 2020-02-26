### 21. JavaScript
#### Fetch & Promises


---

#### Asynchronous JavaScript and XML

* Is a collection of client based techniques to fetch web based data asynchronos.
* A browser built-in XMLHttpRequest object (to request data from a web server)
* JavaScript and HTML DOM (to display or use the data)
* AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
  

---
  
  
#### With Ajax you can:

* Read data from a web server - after the page has loaded.
* Request data from a server and load it without having to refresh the entire page.
* Update a web page without reloading the page.
* Send data to a web server - in the background.
  

---
  
  
#### Synchronous & Asynchronos

* Execute something **synchronously** = you wait for it to finish before moving on to another task.
* Standing in line waiting for food.
* Execute something **Asynchronously** = you can move on to another task before it finishes.
* Make an order, sit at the table and wait for your food.
  

---
  
  
#### AJAX examples

* Live search - You enter something into a input and you get alternatives matching.
* Tradera - Auctions and bids are updated continually.
* Login without reload.
  

---
  
  
#### How AJAX works

1. The browser request data from the server.
1. The server responds with data (usally HTML, XML, JSON formats).
1. The browser processes the content and adds it to the page.
  

---
  
  
#### Modern browsers support two different APIs for making HTTP requests

* XMLHttpRequest
* **Fetch API**
  

---
  
#### The fetch API

* The Fetch API provides an interface for fetching resources (including across the network).
* The is a global fetch( ) method 
* fetch( ) provides an easy, logical way to fetch resources asynchronously.
  

---
  
#### Fetch

* The ```fetch()``` method takes one mandatory argument (the path to the resource you want to fetch). 
* And it returns a **Promise** that resolves to the Response to that request, whether it is successful or not.
	

---

#### Using ```fetch()```
	
```JavaScript
const URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(URL) // Call the fetch function passing the url of the API as a parameter
.then(function() {
	// Your code for handling the data you get from the API
})
.catch(function() {
	// This is where you run code if the server returns any errors
});
```
	

---
  
#### Promises
	
* A promise is and Object.
* It represents the eventual completion (or failure) of an asynchronous operation
* It results in a value.
	

---
	
#### Promise states
	
* A Promise is in one of these states:
  * pending: initial state, neither fulfilled nor rejected.
  * fulfilled: meaning that the operation completed successfully.
  * rejected: meaning that the operation failed.
	

---
	
#### Promise
<img style="width: 800px;" src="/media/javascript-images/javascript-21/promise.png" alt="promise">
	

---

#### Promises
	
* ```.then()``` runs if ```resolved```

```JavaScript
var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve('success');
	}, 300);
});

promise1.then(function(value) {
	console.log(value); // expected output: "success"
});
```
	

---

#### Promises
	
* ```.catch()``` runs if ```rejected```

```JavaScript
var promise1 = new Promise(function(resolve, reject) {
	setTimeout(function() {
		reject('rejected');
	}, 300);
});

promise1.catch(function(error) {
	console.log(error); // expected output: "rejected"
});
```
	

---
	
#### Promise
<img style="width: 800px;" src="/media/javascript-images/javascript-21/promise.png" alt="promise">
	

---

#### Async/Await
	
* async & await are special syntax which makes it more comfortable to work with promises.


---

#### ```async```
	
* Adding the ```async``` keyword before a function results in it always returning a promise.

```JavaScript
async function f() {
	return 1;
}

console.log(f()); // A fulfilled promise
```


---

#### ```async```

* Adding the ```async``` keyword before a function results in it always returning a promise.

```JavaScript
async function f() {
	return 1;
}

f().then(function(value){
	console.log(value); // 1
}); 
```


---

#### ```async```
* The code beneath is the same as the previous slide.

```JavaScript
async function f() {
	return Promise.resolve(1);
}

f().then(function(value){
	console.log(value); // 1
}); 
```


---

#### ```await```

* await makes JavaScript wait until that promise settles and returns its result.

```JavaScript
async function f() {

	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 1000)
	});

	// Execution “pauses” at the line beneath and resumes when the promise settles, 
	// with result becoming its result.
	let result = await promise; 

	alert(result); // "done!"
}

f();
```


---
					
#### ```await``` has to be in an async function, otherwise there would be a syntax error!
	

---
	
### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>