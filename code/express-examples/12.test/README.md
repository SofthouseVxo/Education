# Error Handling

Adds an error handling middleware that returns the error as JSON

## Setting it up from scratch

```sh
npm install --save-dev mocha chai
```

Add the following script to `package.json`

```json
"test": "mocha ./tests --recursive"
```

## Instructions

```sh
npm install
npm start
```

## Test

Put to replace an entire resource at the given path

```sh
curl -X POST localhost:3000/users/ --data '{
  "name": "My Name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "address": {
    "street": "My Stree",
    "suite": "My Suite",
    "city": "My City",
    "zipcode": "Zip",
    "geo": {
      "lat": 1,
      "lng": 2
    }
  }
}' -H "Content-Type: application/json; charset=utf-8" | jq

{
  "error": {
    "expose": true,
    "statusCode": 400,
    "status": 400,
    "body": "{\n  \"name\": \"My Name\",\n  \"username\": \"coolz\",\n  \"email\": \"coolz@gmail.com\",\n  \"address\": {\n    \"street\": \"My Stree\",\n    \"suite\": \"My Suite\",\n    \"city\": \"My City\",\n    \"zipcode\": \"Zip\",\n    \"geo\": {\n      \"lat\": 1,\n      \"lng\": 2\n    }invalid characters here\n  }\n}",
    "type": "entity.parse.failed"
  }
}
```

The middleware sets the response status code from `statusCode` or `status` if present and defaults to 500:

```sh
curl -i -X POST localhost:3000/users/ --data '{
  "name": "My Name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "address": {
    "street": "My Stree",
    "suite": "My Suite",
    "city": "My City",
    "zipcode": "Zip",
    "geo": {
      "lat": 1,
      "lng": 2
    }invalid characters here
  }
}' -H "Content-Type: application/json; charset=utf-8"

HTTP/1.1 400 Bad Request
```

Handles mongoose connection errors better in the catch block if mongo isn't available:

```sh
npm start

{ MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
    at Socket.err (/Users/jonaseck/git/Education/code/express-examples/11.errorHandling/node_modules/mongodb-core/lib/connection/connect.js:287:16)
    at Object.onceWrapper (events.js:315:30)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at emitErrorNT (internal/streams/destroy.js:64:8)
    at _combinedTickCallback (internal/process/next_tick.js:138:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
  name: 'MongoNetworkError',
  errorLabels: [ 'TransientTransactionError' ],
  [Symbol(mongoErrorContextSymbol)]: {} }
```