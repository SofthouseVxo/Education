# Mongoose

Mongoose is an NPM lib used to communicate with a mongodb database.

If you add or list users, you can get a user with a specific ID

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

Node: use the ´_id` for the created or listed user. It will vary and be unique for each user created

```sh
curl localhost:3000/users/5ce520d8bd2a0824110b47db -H "Content-Type: application/json; charset=utf-8" | jq .

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