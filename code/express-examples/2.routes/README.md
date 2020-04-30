# Routing

Listens to HTTP get on / and returns "{Hello": "World"} as UTF-8 encoded application/json

This solution uses routes to organize methods

## Instructions

```sh
npm install
npm start
```

## Test

```sh
curl -i localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/“11-2KXtcX4n/Oy0kKelr93APqLTZ0Y”
Date: Wed, 29 Apr 2020 13:46:25 GMT
Connection: keep-alive

{"Hello": "World"}
```
