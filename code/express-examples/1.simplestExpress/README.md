# Simple Express example

Listens to HTTP get on / and returns "{Hello": "World"} as UTF-8 encoded application/json

## Creating it from Scratch

```sh
npm init
npm install --save express
```

add the `"start": "node index.js",`in package json under scripts for convenience

Create and add the contents to `ìndex.js` file

```sh
npm start
```

press ctrl-c to break execution

## Instructions

```bash
npm install
npm start
```

## Test

```sh
curl -i localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Mon, 13 May 2019 20:06:54 GMT
Connection: keep-alive

Hello World
```