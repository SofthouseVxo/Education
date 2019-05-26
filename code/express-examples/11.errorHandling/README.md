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
    }invalid characters here
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