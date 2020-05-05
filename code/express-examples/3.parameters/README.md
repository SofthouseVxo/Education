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

Requests with a path parameter, `someparam` the example below will be routed to the param function

```sh
curl -s "localhost:3000/someparam?keyWithoutValue&keyWithvalue=value" -H "some: header" | jq
```

```json
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
```

requests without a path parameter will be routed to the hello function:

```sh
curl -s "localhost:3000" | jq
```

```json
{
  "Hello": "World"
}
```

requests to /willNeverBeCalled ends up in the parameter function

```sh
curl -s "localhost:3000/willNeverBeCalled" | jq
```

```json
{
  "Hello": "World",
  "query": {},
  "params": {
    "pathParameter": "willNeverBeCalled"
  },
  "headers": {
    "host": "localhost:3000",
    "user-agent": "curl/7.64.1",
    "accept": "*/*"
  }
}
```

would be routed to hello and show `{"hello":"world"}`, but the route is shadowed by the path parameter route.

Placing the willNeverBeCalled before the pathparameter route will make it impossible to call the path parameter route with the parameter `willNeverBeCalled`

```js
router.get("/:pathParameter", helloWorld.params)

// can never reach this code
router.get("/willNeverBeCalled", helloWorld.hello)
```

```js
router.get("/imFirst", helloWorld.hello)

// pathParameter can never be "imFirst"
router.get("/:pathParameter", helloWorld.params)

```
