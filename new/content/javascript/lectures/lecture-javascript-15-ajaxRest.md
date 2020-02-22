<!doctype html>
<html>
	<head>
		<title>JavaScript - AJAX & REST

					<h3>15. JavaScript</h3>
##### AJAX & REST</h5>

---


#### Asynchronous JavaScript and XML</h4>
					<ul>
						<li>Is a collection of client based techniques to fetch web based data asynchronos.</li>
						<li>A browser built-in XMLHttpRequest object (to request data from a web server)</li>
						<li>JavaScript and HTML DOM (to display or use the data)</li>
						<li>AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.</li>
					</ul>

---


#### With Ajax you can:</h4>
					<ul>
						<li>Read data from a web server - after the page has loaded.</li>
						<li>Request data from a server and load it without having to refresh the entire page.</li>
						<li>Update a web page without reloading the page.</li>
						<li>Send data to a web server - in the background.</li>
					</ul>

---


#### Synchronous & Asynchronos</h4>
					<ul>
						<li>Execute something <b>synchronously</b> = you wait for it to finish before moving on to another task.</li>
						<li>Standing in line waiting for food</li>
						<li>Execute something <b>Asynchronously</b> = you can move on to another task before it finishes.</li>
						<li>Make an order, sit at the table and wait for your food</li>
					</ul>

---


#### AJAX examples</h4>
					<ul>
						<li>Live search - You enter something into a input and you get alternatives matching.</li>
						<li>Tradera - Auctions and bids are updated continually.</li>
						<li>Login without reload.</li>
					</ul>

---


					<h2>How AJAX works</h2>
					<ol>
						<li>The browser request data from the server.</li>
						<li>The server responds with data (usally HTML, XML, JSON formats).</li>
						<li>The browser processes the content and adds it to the page.</li>
					</ol>

---


#### AJAX flow</h4>
  <img style="width: 600px;" src="/new/media/javascript-images/javascript-15/ajaxflow.png" alt="AJAX flow">

---
				

#### Data formats</h4>
					<ul>
						<li>When exchanging data between a browser and a server, the data can only be text.</li>
						<li>Servers typically send back:</li>
						<ul>
							<li><b>HTML</b> - Hyper Text Markup Language.</li>
							<li><b>XML</b> - Extensible Markup Language.</li>
							<li><b>JSON</b> - JavaScript Object Notation.</li>
						</ul>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### XML (Extensible Markup Language)
						* XML was designed to store and transport data.
						* XML was designed to be both human- and machine-readable.
						* XML is more strict than HTML.
						* XML tags names describe the data that they contain.

						```XML
						<note>
							<to>Tove</to>
							<from>Jani</from>
							<heading>Reminder</heading>
						</note>
						```
					</script>

---


				<section data-markdown>
					<script type="text/template">
						#### JSON (JavaScript Object Notation)
						
						* JSON is a syntax for storing and exchanging data.
						* JSON is text, written with JavaScript object notation.
						* JSON is text, and we can convert JavaScript object into JSON, and send JSON to the server.
						* Like JavaScript objects JSON objects use key - value pairs.

						```JSON
						{"menu": {
							"id": "file",
							"value": "File",
							"popup": {
								"menuitem": [
									{"value": "New", "onclick": "CreateNewDoc()"},
									{"value": "Open", "onclick": "OpenDoc()"},
									{"value": "Close", "onclick": "CloseDoc()"}
								]
							}
						}}
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### Working with JSON
						
						* ```JSON.stringify()``` converts JavaScript objects into a string formatted using JSON.
						* ```JSON.parse()``` processes a string containing JSON data, converting JSON data into a JavaScript object.

						```JSON
						{"menu": {
							"id": "file",
							"value": "File",
							"popup": {
								"menuitem": [
									{"value": "New", "onclick": "CreateNewDoc()"},
									{"value": "Open", "onclick": "OpenDoc()"},
									{"value": "Close", "onclick": "CloseDoc()"}
								]
							}
						}}
						```
						```JavaScript
						JSON.stringify(object); // Converts to JSON

						JSON.parse(response); // Converts JSON response to a JS object
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						XML
						```XML
						<menu id="file" value="File">
							<popup>
								<menuitem value="New" onclick="CreateNewDoc()" />
								<menuitem value="Open" onclick="OpenDoc()" />
								<menuitem value="Close" onclick="CloseDoc()" />
							</popup>
						</menu>
						```

						JSON
						```JSON
						{"menu": {
							"id": "file",
							"value": "File",
							"popup": {
								"menuitem": [
									{"value": "New", "onclick": "CreateNewDoc()"},
									{"value": "Open", "onclick": "OpenDoc()"},
									{"value": "Close", "onclick": "CloseDoc()"}
								]
							}
						}}
						```
					</script>

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


#### API real world example</h4>
					<p>Think of an API like a menu in a restaurant. The menu provides a list of dishes you can order, along with a description of each dish. When you specify what menu items you want, the restaurant’s kitchen does the work and provides you with some finished dishes. You don’t know exactly how the restaurant prepares that food, and you don’t really need to. - <a href="https://www.howtogeek.com/343877/what-is-an-api/">Chris Hoffman</a></p>

---


#### If I write a script or create some software, websites or web other services, I can decide to open up some of that functionality for others.</h4>

---


#### Different types of APIs</h4>
					<ul>
						<li>Internal computer API (files, camera etc.).</li>
						<li>Browser API (storage, history, location etc.).</li>
						<li>External RESTful API(Getting and sending data remote).</li>
						<li>SOAP etc.</li>
					</ul>

---


#### Different types of APIs</h4>
					<img style="width: 800px" src="/new/media/javascript-images/javascript-15/api1.png" alt="apis">

---


#### Different types of APIs</h4>
					<img style="height: 500px" src="/new/media/javascript-images/javascript-15/api2.png" alt="apis">

---


#### Different types of APIs</h4>
					<img style="height: 500px" src="/new/media/javascript-images/javascript-15/api3.png" alt="apis">

---


#### Different types of APIs</h4>
					<img style="width: 800px" src="/new/media/javascript-images/javascript-15/api4.png" alt="apis">

---


#### REST</h4>
					<ul>
						<li>REST is acronym for REpresentational State Transfer.</li>
						<li>REST is a set of of rules about how to use the HTTP protocol.</li>
						<li>RESTful Web services, provide interoperability between computer systems on the Internet.</li>
						<li>When a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.</li>
					</ul>

---


#### <a href="https://restfulapi.net/rest-architectural-constraints/">REST Architectural Constraints</a></h4>

---


#### What is an RESTful API?</h4>
					<ul>
						<li>It's an interface or communication protocol between a client and a server.</li>
						<li>It's like a “contract” between the client and the server.</li>
							<ul>
								<li>If the client makes a request in a specific format.</li>
								<li>It will always get a response in a specific format.</li>
								<li>Or initiate a defined action.</li>
							</ul> 
					</ul>

---


#### Client & resource</h4>
					<ul>
						<li>Client — the client is the person or software who uses the API.</li>
						<li>Resource — a resource can be any object the API can provide information about.</li>
						<li>The client then uses the servers API to get the resource.</li>
						<li>The API isn’t the same as the remote server — rather it is the part of the server that receives requests and sends responses.</li>
					</ul>

---


#### Client & resource</h4>
					<img src="/new/media/javascript-images/javascript-15/cr1.png" alt="rest">

---


#### Client & Resource & API</h4>
					<img src="/new/media/javascript-images/javascript-15/cr2.png" alt="rest">

---


#### API URI (Uniform Resource Identifier)</h4>
					<img src="/new/media/javascript-images/javascript-15/cr3.png" alt="rest">

---


#### API</h4>
					<img src="/new/media/javascript-images/javascript-15/cr4.png" alt="rest">

---


#### API endpoints</h4>
					<img src="/new/media/javascript-images/javascript-15/cr5.png" alt="rest">

---


#### Spotify API example</h4>
					<ul>
						<li>Client: Your application</li>
						<li>Resource: Songs, playlists or users.</li>
						<li>Each resource has a unique identifier.</li>
						<li>API endpoint -> https://api.spotify.com/v1/artists/234/albums?album_type=SINGLE&limit=10</li>
						<li>Making the http request above will result in that Spotify will give you maximum 10 albums from a specific artist.</li>
					</ul>

---


#### Example API's</h4>
					<ul>
						<li><a href="https://jsonplaceholder.typicode.com/">JSONplaceholder</a></li>
						<li><a href="https://developer.github.com/v3/">Github API</a></li>
						<li><a href="https://developer.spotify.com/documentation/web-api/">Spotify API</a></li>
						<li><a href="https://www.pexels.com/api/">Pexels API</a></li>
					</ul>

---


#### Using APIs we cannot just ask for and GET data(resources) we can also, send, update and delete data.</h4>

---


#### These are called CRUD operations</h4>
					<ul>
						<li>CREATE</li>
						<li>READ</li>
						<li>UPDATE</li>
						<li>DELETE</li>
					</ul>

---


#### CRUD operations</h4>
					<ul>
						<li>Depending on in which system they are used they are called different things.</li>
					</ul>
					<img style="width: 600px;" src="/new/media/javascript-images/javascript-15/crud.png" alt="CRUD operations">

---

        <section data-markdown>
					<script type="text/template">
						#### The GET method
						
						* GET is used to request data from a specified resource.
						* Along with GET request we can send additional information about what we want to recieve using query strings.
						* These are name/value pairs and are sent in the URL of a GET request.
						* Start with ```?``` and seperated by ```&```

						```JavaScript
						'http://www.testing.com/test/demo_form.php?name1=value1&name2=value2'
						```
					</script>

---

				<section data-markdown>
					<script type="text/template">
						#### The POST method
						
						* POST is used to send data to a server to create/update a resource.
						* The data sent to the server with POST is stored in the request body of the HTTP request.
					</script>

---


#### Network tab</h4>
					<img src="/new/media/javascript-images/javascript-15/nw.png" alt="network">

---

#### Network tab</h4>
					<img src="/new/media/javascript-images/javascript-15/nw1.png" alt="network">

---

#### Network tab</h4>
					<img src="/new/media/javascript-images/javascript-15/nw2.png" alt="network">

---

#### Network tab</h4>
					<img src="/new/media/javascript-images/javascript-15/nw3.png" alt="network">

---

#### Network tab</h4>
					<img src="/new/media/javascript-images/javascript-15/nw4.png" alt="network">

---


#### HTTP Headers</h4>
					<ul>
						<li>HTTP headers let the client and the server pass additional information with an HTTP request or response.</li>
						<li>An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value.</li>
						<li>Content-Type: application/json</li>
					</ul>

---


#### Modern browsers support two different APIs for making HTTP requests</h4>
					<ul>
						<li><u>XMLHttpRequest (the focus of this lecture).</u></li>
						<li>Fetch API (comes later in the course).</li>
					</ul>

---

				<section data-markdown>
					<script type="text/template">
						#### The XMLHttpRequest Object

						* The XMLHttpRequest Object is used to exchange data with a server behind the scenes.
						* This is done without reloading the whole page.

						```JavaScript
						// Creating an new XMLHttpRequest object
						let xhr = new XMLHttpRequest();
						
						// (<method>, <url>, <if asynchronos>)
						xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
						
						// Sets how to handle the response
						xhr.addEventListener('load', function(){
							if (this.readyState == 4 && this.status == 200) {
								console.log(this);  // Whole response object
								console.log(this.responseText);  // The response data
								JSON.parse(this.responseText); // Parses the JSON to a workable JavaScript object
							}
						});

						// Sends the request
						xhr.send();
						}
						```
					</script>

---


#### Common HTTP response status codes</h4>
					<ul>
						<li>200 OK (The request has succeeded)</li>
						<li>400 Bad Request (This response means that server could not understand the request due to invalid syntax.)</li>
						<li>401 Unauthorized</li>
						<li>403 Forbidden</li>
						<li>404 Not Found (The server can not find requested resource.)</li>
						<li>500 Internal Server Error (The server has encountered a situation it doesn't know how to handle.)</li>
						<li><a href="https://developer.mozilla.org/sv-SE/docs/Web/HTTP/Status" target="_blank">Full list</a></li>
					</ul>

---


#### XMLHttpRequest Readystates</h4>
					<ul>
						<li>0 UNSENT Client has been created. ```open()``` not called yet.</li>
						<li>1 OPENED ```open()``` has been called.</li>
						<li>2 HEADERS_RECEIVED ```send()``` has been called, and headers and status are available.</li>
						<li>3 LOADING Downloading; responseText holds partial data.</li>
						<li>4 DONE The operation is complete.</li>
					</ul>

---


#### Check example code on how to use CRUD operations using REST</h4>

---


#### Access Across Domains</h4>
					<ul>
						<li>For security reasons, modern browsers do not allow access across domains.</li>
						<li>Meaning that browsers do not load AJAX responses from servers thats not your own.</li>
						<li>This means that both the web page and the XML file it tries to load, must be located on the same server.</li>
						<li>However there are workarounds.</li>
					</ul>

---


#### Workarounds</h4>
					<ul>
						<li>Having a backend document on your server that requests the external data and then have that deliver the content.</li>
						<li><a href="https://www.w3schools.com/js/js_json_jsonp.asp" target="_blank">JSONP</a> script tag instead to load external data.</li>
						<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">CORS</a> - CROSS-ORIGIN RESOURCE SHARING</li>
						<ul>
							<li>Set specific rules via HTTP headers to say that the communication between server and website is ok.</li>
						</ul>
					</ul>

---


### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a></h3>

---
				
