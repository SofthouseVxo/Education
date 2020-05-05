# Error Handling

Adds an error handling middleware that returns the error as JSON

## Setting it up from scratch

```sh
npm install --save mongoodb
```

## Instructions

```sh
npm install
npm start
```

## Test

It would be nice to always be able to pass the output to jq even when we have errors:

Let's send some invalid JSON:

```sh
curl -s -X POST localhost:3000/body --data '{"not":json}' -H "Content-Type: application/json; charset=utf-8" | jq
```

```json
{
  "error": {
    "expose": true,
    "statusCode": 400,
    "status": 400,
    "body": "{\"not\":json}",
    "type": "entity.parse.failed"
  }
}
```

And 404:

```sh
curl -s -X POST localhost:3000/nothinghere | jq
```

```json
{
  "status": 404
}
```

Adding the statuscode as a body data reply is actually not recommended, but we do it for ease of development.
