# Middlewares

Echoes the body of the post request to /middlewares

Uses the express.json() middleware to parse the body of the request as json if a header `Content-Type: application/json` is supplied.

## Instructions

```sh
npm install
npm start
```

## Test

The `-d` flag indicates the body that is sent with the request:

```sh
curl -i -X POST localhost:3000/body --data '{"somekey":"somevalue"}' -H "Content-Type: application/json; charset=utf-8"
```

output:

```json

{"somekey":"somevalue"}
```

The "someValue" value is available as `req.body.somekey`

### Content Type Header

The Content type header instructs the body parser middleware to parse the body as json if requested: "Content-Type: application/json; charset=utf-8"

```sh
curl -i -X POST localhost:3000/body --data '{"somekey":"somevalue"}'
```

`req.body` now contains a very strange key with no value:

```json
{"{\"somekey\":\"somevalue\"}":""}
```

### Invalid JSON

```sh
curl -i -X POST localhost:3000/body --data '{"not":json}' -H "Content-Type: application/json; charset=utf-8"
```

Read the error output:

```html
...
<pre>SyntaxError: Unexpected token j in JSON at position 7<br> &nbsp; &nbsp;at JSON.parse
...
```

Det 7:e tecknet i json-representationen är fel: '{"not":j <-- här är det

Sending in valid json clears it up:

```sh
curl -i -X POST localhost:3000/body --data '{"not":"json"}' -H "Content-Type: application/json; charset=utf-8"
```

