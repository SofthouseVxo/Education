# Methods and Return Codes

Listens to different HTTP methods on /methods and returns a text response and return code

## Instructions

```sh
npm install
npm start
```

## Test

```sh
curl -s -i "localhost:3000/methods"
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 22
ETag: W/"16-H2aKpu4DuiJ4tNHt4H8EOdcflxw"
Date: Mon, 13 May 2019 21:59:19 GMT
Connection: keep-alive
Custom-response-header: yep

you sent a get request and got a custom response header
```

The `-i` flag tells curl to print out the response headers in the terminal before printing the body
Note the `Custom-response-header: yep` that was added to the response
Note the `Content-Type: text/html; charset=utf-8` header indicating that the response is text: "you sent a get request and got a custom response header"

```sh
curl -s -i -X POST "localhost:3000/methods"
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 81
ETag: W/"51-VAdbb/HQgfclsolPbYqgX7OK9bs"
Date: Mon, 13 May 2019 21:59:48 GMT
Connection: keep-alive

You sent a Post, I'll respond with a status of 201 (Created) even though I didn't
```

```sh
curl -s -i -X PUT "localhost:3000/methods"
```

A no content response literally has no content even if you try to send it

```sh
curl -s -i -X DELETE "localhost:3000/methods"
HTTP/1.1 204 No Content
X-Powered-By: Express
ETag: W/"45-KgVIiUpMkBB7At+HYJk0oP8zZFM"
Date: Mon, 13 May 2019 22:05:21 GMT
Connection: keep-alive
```