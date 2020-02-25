### 3. Backend APIs
#### Hypertext Transfer Protocol (HTTP)

---
#### HTTP Protocol Basics</h4>
* An Internet Protocol initially used for browsing web pages.</li>
* Send request - get response</li>
* It is <b>Stateless</b> (doesn’t remember what you did)</li>

<img style="width: 700px;" src="/media/backend-api-images/backend-api-3/http.png" alt="http">

---
#### HTTP Protocol Basics</h4>
* Hypertext as in Hypertext Markup Language (HTML)</li>
* Request response model:</li>
  * Request message</li>
    * Resources identified using a Universal Resource Identifier (URI)</li>
    * Request Method</li>
    * Headers, Body, query</li>
  * Response</li>
    * Response code</li>
    * Headers och Body</li>

---
####  Uniform Resource Identifier URI
* A textual identifier how to reach a resource:

**Note** within brackets is optional.

```Shell
URI = scheme:[//authority]path[?query][#fragment]
```
```Shell
authority = [userinfo@]host[:port]
```

Example:
```Shell
http://www.smp.se
mongodb://someuser:somepassword@localhost:27017/someDatabase
```

---
    
####  HTTP Headers
* Defines the operating parameters of an HTTP transaction.
* A key-value string separated by colon ```:```
            
**Example:**  body-parser parses the request based on content and charset

* Specifies what format I’m sending the request as
```Shell
Content-Type: application/json
```
Specifies what i want the response as
```Shell
Accept-Charset: utf-8
Accept: application/json
```

---
####  HTTP Response Code
* Status codes are issued by a server in response to a client's request made to the server
* Be informative Don’t always answer 200 and 500
* 5 Categories
  * 1xx Informational
  * 2xx success (200 OK, 201 Created, 204 No change)
  * 3xx redirection (301 Moved Permanently, 304 Not modified)
  * 4xx client errors (400 bad request, 401 unathorized, 403 forbidden, 404 not found)
  * 5xx server errors (500 internal error, 502 bad gateway, 503 service unavailable)
            
<a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank">List on wikipedia</a>

---
####  HTTP Methods: Get

* Requests a representation of the specified resource
* Is idempotent, may not cause any changes
            
Getting resource data:
```Shell
curl http://smp.se
curl -i -H "Content-Type:application/json" http://api.softhouse.rocks/posts/1
```
Listing Resources:
```Shell
curl http://api.softhouse.rocks/users
curl http://api.softhouse.rocks/users?page=2
```

---

####  HTTP Methods: Post

* The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI.

Create Resource
```Shell
curl -i -X POST -H "Content-Type:application/json" http://api.softhouse.rocks/posts -d '{"title":"Hi, World", "body":"Fresh as morning dew", "userId": "1"}'
```
Response
```Shell
Body: The created resource {"id":100, …}
Code: 201
```

---
####  HTTP Methods: Delete

* The DELETE method deletes the specified resource.

Delete Resource

```Shell
curl -X DELETE http://api.softhouse.rocks/users/3
```
Response
```Shell
Body: none
Code: 200 if deleted, 204 no change (if not found)
```

---

####  HTTP Methods: Put

* The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI.

Create a Resource

```Shell
curl -X PUT http://api.softhouse.rocks/posts/3 -H "Content-Type:application/json" -d  '{
  "name": "Me Myself and I", ...}'          
```
Response
```Shell
Body: The created resource  {"id":3, …}
Code: 200
```

---

####  HTTP Methods: Patch

* The PATCH method applies partial modifications to a resource.

Update a Resource
```Shell
curl -X PATCH http://api.softhouse.rocks/posts/3 -H "Content-Type:application/json" -d  '{
  "name": "some other name"}'     
```
Response
```Shell
Body: The updated resource  {"id":3, …}
Code: 200            
```

---

#### Less Common HTTP Methods</h4>
Some are rarely used when implementing APIs:
* HEAD: returns a response identical to that of a GET request, but without the body.</li>
* TRACE: echoes the received request so that a client can see what (if any) changes or additions have been made by intermediate servers.</li>
* OPTIONS: returns the HTTP methods that the server supports for the specified URL.</li>
* CONNECT method converts the request connection to a transparent TCP/IP tunnel.</li>

---
