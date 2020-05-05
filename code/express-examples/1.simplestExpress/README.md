# Simple Express example

Listens to HTTP get on / and returns "{Hello": "World"} as UTF-8 encoded application/json

## Creating it from Scratch

```sh
npm init
npm install --save express
```

add the `"start": "node index.js",`in package json under scripts for convenience

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
```

should be:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
```

Don't forget the comma att the end

Start the server by executing:

```sh
npm start
```

press ctrl-c to break execution

### Nodemon

nodemon is a development utility that reloads your javascript code whenever there's a change so you don't have to restart

```sh
npm install -save-dev nodemon
```

Update package.json to use nodemon to run the application:

```json
  "scripts": {
    "start": "node index.js",
```

should be:

```json
  "scripts": {
    "start": "nodemon index.js",
```


## Instructions

```bash
npm install
npm start
```

## Test

```sh
curl -s -i localhost:3000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Mon, 13 May 2019 20:06:54 GMT
Connection: keep-alive

Hello World
```

The `-i` flag adds header output from the response.
The `-s` flag removes unneccessary progress output from the commend.

`HTTP/1.1 200 OK` shows the HTTP version and response code, 200.
`application/json; charset=utf-8` instructs that thre response is in json representation.
