<!doctype html>
<html>
	<head>
		<title>JavaScript - Dynamic manipulation</title>
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

### 12. JavaScript</h3>
##### DOM - Dynamic manipulation</h5>

---


#### Real examples of when the DOM is edited:</h4>
          <ul>
            <li>When content/visuals changes after load without reloading the page.</li>
            <li>Cookie consent modals - show/accept/hide.</li>
            <li>Tradera - placing bid, changing time left.</li>
            <li>Facebook - "like" a post(thumb turns blue).</li>
          </ul>

---
        

#### Browser Object Model(BOM)</h4>
  <img style="margin-top: 0px; width: 600px;" src="../../media/javascript-images/javascript-8/bom.png" alt="Browser Object Model">

---


#### DOM/Node tree</h4>
  <img style="margin-top: 0px;" src="../../media/javascript-images/javascript-8/domtree.png" alt="dom - object model">

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


#### Manipulating the DOM</h4>

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


#### Using innerHTML for everything? Think again..</h4>

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
  

#### XSS case</h4>
          <ol>
            <li>You got a comment field on your site.</li>
            <li>Instead of normal comment a user posts a script tag with malicious code.</li>
            <li>User submits comment and the comment is saved in a database on a server.</li>
            <li>Page reloads and when it renders the new comment JS code runs with the new malicious code</li>
          </ol>

---


#### Third party libraries</h4>
          <ul>
            <li>Many sites use third party js libraries for example Analytic, A/B testing, Marketing tools etc.</li>
            <li>Even if you write your code correctly some of these scripts could be vulnerable.</li>
          </ul>

---

        <section data-markdown>
            <script type="text/template">
#### So what to do?</h4>
          <ul>
            <li>Validate inputs - not allowing certain characters.</li>
            <li>Validate both in front end and server side (since users could bypass frontend validation).</li>
            <li>Don´t create DOM fragments containing HTML from untrusted sources.</li>
            <li>Escape characters like < and > etc.</li>
          </ul>
        </script>

---


#### innerHTML & XSS</h4>
          <ul>
            <li>Only use innerHTML when:</li>
            <ul>
              <li>You control all the markup being generated (no user content!).</li>
              <li>If you do the users content has to be escaped and added as text rather than HTML!</li>
            </ul>
          </ul>

---


#### .innerHTML property</h4>
          <ul>
            <li>Advantages:</li>
            <ul>
              <li>Able to add a lot of new markup with less code.</li>
              <li>Can be faster when adding a lot of new markup.</li>
              <li>Simple way to remove all content from one element.</li>
            </ul>
            <li>Disadvantages:</li>
            <ul>
              <li>Should <b>NEVER</b> be used to add content from a user.</li>
              <li>Can be difficult to isolate single elemnts within a larger DOM fragment.</li>
              <li>Event Handler may no longer work as intended.</li>
            </ul>
          </ul>

---


#### DOM Manipulation</h4>
          <ul>
            <li>Advantages:</li>
            <ul>
              <li>Is suited to changing on element from a DOM fragment where the are many sibling.</li>
              <li>Does no effect eventhandlers.</li>
              <li>Easy to add a elements incrementally with scripts.</li>
            </ul>
            <li>Disadvantages:</li>
            <ul>
              <li>Is slower than the innerHTML property if you have to make alot of changes to the content of the page.</li>
              <li>You need to write more cote to achieve the same as with innerHTML.</li>
            </ul>
          </ul>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---
        

