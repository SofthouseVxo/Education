# Routing

Listens to HTTP get on / and returns "{Hello": "World"} as UTF-8 encoded application/json

This solution shows how to receive parameter data by showing query or path parameters as well as received headers

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