# Mongoose

Mongoose is an NPM lib used to communicate with a mongodb database.

Find a user by supplying a query parameter

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
curl -i -X PUT localhost:3000/users/5ce52a319d587f271134f82f --data '{
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
}' -H "Content-Type: application/json; charset=utf-8"

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

Patch to update a part of a resource at the given path

```sh
curl -X PATCH localhost:3000/users/5ce52a319d587f271134f82f --data '{
  "name": "Something other than my name"
}' -H "Content-Type: application/json; charset=utf-8" | jq

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
  "name": "Something other than my name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "__v": 0
}
```