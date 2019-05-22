# Mongoose

Mongoose is an NPM lib used to communicate with a mongodb database.

Implement PUT and PATCH

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

Add a user to get an `_id`

```sh
curl -X POST localhost:3000/users --data '{
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
}' -H "Content-Type: application/json; charset=utf-8" | jq .

{
  "address": {
    "geo": {
      "lat": 1,
      "lng": 2
    },
    "street": "My Stree",
    "suite": "My Suite",
    "city": "My City",
    "zipcode": "Zip"
  },
  "_id": "5ce52a319d587f271134f82f",
  "name": "My Name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "__v": 0
}
```

Search for the user by userName

```sh
curl localhost:3000/users?username=coolz -H "Content-Type: application/json; charset=utf-8" | jq .

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

