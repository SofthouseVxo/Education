
### 5. Backend APIs
#### Express
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Express

* Express is a web framework for Node.js
* Express Provides:
* A set of features for web and mobile applications.
* HTTP utility methods and middleware for creating APIs quick and easy. 

```Shell
$ npm install express --save
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Express simple example

* Imports the express module.
* Starts a server and listens on port 3000 for connections.
* The app responds with “Hello World!” for requests to the root URL (/) or route. 

```JavaScript
const express = require('express')

const app = express()
const port = 3000

app.get('/', function(req, res){
res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Open browser and navigate to localhost:3000 so see hello world written on the page.
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Express simple example

```JavaScript
const express = require('express')

const app = express()
const port = 3000

app.get('/', function(req, res){
	res.send(`
	<div>
	#### Hello World!
		Yo!
	</div>
	`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Open browser and navigate to localhost:3000 so see HTML visible on the page.
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Routing
"Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on)." - <a href="https://expressjs.com/en/starter/basic-routing.html" target="blank">Expressjs</a>
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Express simple example

* Each route can have one or more handler functions, which are executed when the route is matched.

Route definition structure:
```JavaScript
// app.METHOD(PATH, HANDLER)

app.get('/', function(req, res){
	res.send('Hello World!')
})
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Express simple example

* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.

Route definition structure:
```JavaScript
// app.METHOD(PATH, HANDLER)

app.get('/hello', function(req, res){
	res.send('Hello World!')
})
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Route Handlers
	
```JavaScript
// get = HTTP method for which the middleware function applies.
// '/' = Path (route) for which the middleware function applies.
// function = The middleware function.
app.get('/', function(req, res, next){
	// req (object) = HTTP request argument to the middleware function.
	// res (object)= HTTP response argument to the middleware function.
	// next (function) = Callback argument to the middleware function.

	// these are called req, res, next by convention.
})
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Route handlers behave like something called a **middleware** to handle a request.
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the **req**uest and the **res**ponse objects.
* End the request-response cycle.
* Call the next middleware in the stack.
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Using middleware function

```JavaScript
const express = require('express')

const app = express()
const port = 3000

var myLogger = function (req, res, next) {
	console.log('LOGGED')
	next()
}

app.use(myLogger)

app.get('/', function(req, res){
	res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

```JavaScript
LOGGED //in console
Hello World! // returned to whoever made the request
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---
#### Using middleware function
	
```JavaScript
const express = require('express')

const app = express()
const port = 3000

var myLogger = function (req, res, next) {
	console.log('LOGGED')
	next()
}

// app.use(myLogger)

app.get('/', function(req, res){
	res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

```JavaScript
// No logged
Hello World! // returned to whoever made the request
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Route parameters

* Route parameters are populated in the req.params object.
* They have the name of the route parameter specified in the path as their respective keys.

```Shell
Route path: /users/:userId
Request URL: http://localhost:3000/users/34
```

```JavaScript
app.get('/users/:userId', function (req, res) {
	res.send(req.params) // { "userId": "34" }
})
```
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---