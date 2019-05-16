# Routing

Listens to HTTP get on / and returns "{Hello": "World"} as UTF-8 encoded application/json

This solution shows how to receive parameter data by showing query or path parameters as well as received headers

There are three kinds of parameters in HTTP

## Path parameter

A path parameter is supplied on the path itself by adding a colon (:) on the path.

```javascript
router.get("/:pathParameter", helloWorld.params)
```

the value of this parameter is available as `req.params.pathParameter`

## Query parameter

Query parameters are supplied at the end of the path

```sh
localhost:3000/someparam?name=value
```

the value of this parameter is available as `req.query.name`

## Header parameter

Header parameters are supplied in the request header as `key: value`

```sh
localhost:3000/someparam -H "key: value"
```

the value of this parameter is avaulable as `req.header.key`

This example uses jq for pretty printing json, see https://stedolan.github.io/jq/

## Instructions

```sh
npm install
npm start
```

## Test

```sh
curl -s "localhost:3000/someparam?keyWithoutValue&keyWithvalue=value" -H "some: header" | jq

{
  "Hello": "World",
  "query": {
    "keyWithoutValue": "",
    "keyWithvalue": "value"
  },
  "params": {
    "pathParameter": "someparam"
  },
  "headers": {
    "host": "localhost:3000",
    "user-agent": "curl/7.54.0",
    "accept": "*/*",
    "some": "header"
  }
}
Jo
```