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
curl -i -X POST localhost:3000/middlewares --data '{"somekey":"somevalue"}' -H "Content-Type: application/json; charset=utf-8"

{"somekey":"somevalue"}
```

The  is available as `req.body.somekey`
