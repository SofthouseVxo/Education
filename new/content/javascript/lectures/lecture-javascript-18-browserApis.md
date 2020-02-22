<!doctype html>
<html>
	<head>
		<title>JavaScript - Browser API's

### 18. JavaScript</h3>
##### Browser API's</h5>

---


					<h3>API</h3>
					<h5>Application Programming Interface</h5>

---
					

#### What is an API (Application Programming Interface)?</h4>
					<ul>
						<li>User interfaces allow humans to interact with programs.</li>
						<li>API's let programs and scripts to talk to each other.</li>
					</ul>

---
	

#### Different types of Apis</h4>
					<ul>
						<li>Internal computer API (files, camera etc.).</li>
						<li><b>Browser API (storage, history, location etc.).</b></li>
						<li>External RESTful API(Getting and sending data remote).</li>
					</ul>

---


#### Api's covered in this lecture</h4>
					<ul>
						<li>web storage</li>
						<li>history</li>
					</ul>

---


#### <a href="https://developer.mozilla.org/sv-SE/docs/Web/API">List of other browser APIS</a></h4>

---


#### Web Storage - Storing data in the browser.</h4>
					<ul>
						<li>There are 3 methods for doing this:</li>
						<ul>
							<li>Cookies</li>
							<li>localStorage</li>
							<li>sessionStorage</li>
						</ul>
					</ul>

---


#### Cookies</h4>
					<ul>
						<li>Cookies are text based information saved in the browser.</li>
						<li>Is a part of the window object.</li>
						<li>A Cookie can store different information but it they are usually used for:</li>
						<ul>
							<li>User information</li>
							<li>Tracking</li>
							<li>Shopping carts, game scores</li>
						</ul>
						<li>GDPR - </li>
					</ul>

---


#### Cookies and GDPR - short description</h4>
					<p>In short the EU directive means that before somebody can store or retrieve any information from a computer, mobile phone or other device, the user must give informed consent to do so. Many websites have added banners (AKA "cookie banners") since then to inform the user about the use of cookies. - <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">MDN 2019</a></p>

---


#### Cookies</h4>
					<ul>
						<li>Cookie size limited to 4kb</li>
						<li>Since its a text string it's usually used for a single value, however you can split it into multiple values with ","</li>
						<li>Then you have to extract the values after</li>
					</ul>

---

        <section data-markdown>
					<script type="text/template">
						#### Setting Cookies
						* Cookies are set both from the server response (cookie is stored in header) and using JavaScript

						In JS
						```JavaScript
						document.cookie = "username=John Smith; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
						```

						Deleting a cookie is done by setting am already expired date or a none value
						```JavaScript
						document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
						```



---


#### localStorage & sessionStorage</h4>
					<ul>
						<li>10mb max</li>
						<li>Is a part of the window object.</li>
						<li>Data stored in sessionStorage is deleted when session is ended (browser tab is closed)</li>
						<li>Data stored in localStorage has no expire date and will not be deleted when the browser is closed</li>
					</ul>

---


#### localStorage & sessionStorage</h4>
					<ul>
						<li>consists of name values pairs</li>
						<li>part of the window object (available everywhere)</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### Adding to storage


						```JavaScript
						// SAVING data to sessionStorage:
						sessionStorage.setItem("key", "value");

						//READING data from sessionStorage:
						let lastname = sessionStorage.getItem("key");

						//REMOVING saved data from sessionStorage:
						sessionStorage.removeItem("key");

						// REMOVING ALL saved data from sessionStorage:
						sessionStorage.clear();

						//localStorage has the same methods
					</script>

---


#### Inspecting Storage in chrome</h4>

					<img style="margin-top: 0px;" src="../../media/javascript-images/javascript-18/storage.png" alt="inspecting storage">

---


#### History API</h4>
					<ul>
						<li>Each tab or window stores the history of visited pages.</li>
						<li>Becuse of this the back and forward buttons work in the browser.</li>
						<li>But in pages using AJAX or building Singe page applications the URL is not updated.</li>
						<li>The History API lets us control the state the browser is in calling methods in the <b>History Object</b>.</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
					#### History Object
				
					```JavaScript
					console.log(window.history); // history object

					// How many items are in the history object (how many sites been visited if not modified)
					console.log(window.history.length); 
					```
				</script>
			</section>

				<section data-markdown>
					<script type="text/template">
						#### History API methods
					
						```history.back()``` - Takes you back in the history.
						```history.forward()``` - Takes you forward in the history.
						```history.go()``` - Takes you to a specific page in the history.
						```history.pushState()``` - Add an item in the history stack (new page).
						```history.replaceState()``` - Does the same as ```pushState``` but modifies the current history entry.
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### ```history.pushState()```
					
						* ```pushState()``` updates the url however it does not reload the page.

						```
						function pushNewState(){
							// pushState does not reload the page
							history.pushState({user: 'John'}, 'Title', 'http://127.0.0.1:5500/code/javascript-examples/javascript-3-variablesDatatypes/index.html');
							
							// location.reload will reload the page
							location.reload();
						}
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### ```history.onpopstate```
						
						* Event that triggers when user moving back and forth 

						```JavaScript
						window.addEventListener('popstate', function(e) {
							console.log('Moved!');
						});
						```
					</script>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---

