# Middlewares

Echoes the body of the post request to /middlewares

Uses the express.json() middleware to parse the body of the request as json if a header `Content-Type: application/json` is supplied.

## Instructions

```sh
npm install
npm start
```

## Test

```sh
curl -i -X POST localhost:3000/middlewares --data '{"asdasd":"asdasd"}' -H "Content-Type: application/json; charset=utf-8"
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 19
ETag: W/"13-OZIO+ye4P9Xv9YO5AQ3vRN9ueLg"
Date: Thu, 16 May 2019 08:39:43 GMT
Connection: keep-alive

{"asdasd":"asdasd"}
```
