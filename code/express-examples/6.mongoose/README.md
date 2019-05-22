# Mongoose

Mongoose is an NPM lib used to communicate with a mongodb database.

This example can add a user and will respond with the user added

## Setting it up from scratch

```sh
npm install --save mongoose
```

## Instructions

```sh
npm install
npm start
```

## Test

```sh
curl -X POST localhost:3000/users --data '{
  "name": "string",
  "username": "string",
  "email": "string",
  "address": {
    "street": "string",
    "suite": "string",
    "city": "string",
    "zipcode": "string",
    "geo": {
      "lat": 0,
      "lng": 0
    }
  }
}' -H "Content-Type: application/json; charset=utf-8" | jq .

{
  "address": {
    "geo": {
      "lat": 0,
      "lng": 0
    },
    "street": "string",
    "suite": "string",
    "city": "string",
    "zipcode": "string"
  },
  "_id": "5ce520d8bd2a0824110b47db",
  "name": "string",
  "username": "string",
  "email": "string",
  "__v": 0
}
```

list users

```sh
curl localhost:3000/users

[
  {
    "address": {
      "geo": {
        "lat": 0,
        "lng": 0
      },
      "street": "string",
      "suite": "string",
      "city": "string",
      "zipcode": "string"
    },
    "_id": "5ce520d8bd2a0824110b47db",
    "name": "string",
    "username": "string",
    "email": "string",
    "__v": 0
  }
]
```
