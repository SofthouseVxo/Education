# Authentication

Uses JSON web tokens to authenticate requests to the API

## Setting it up from scratch

```sh
npm install --save bcrypt jsonwebtoken
```

## Instructions

```sh
npm install
npm start
```

## Test

Sign up

```sh
curl -s -X POST localhost:3000/auth/signup --data '{
  "email": "coolz@gmail.com",
  "password": "coolz"
}' -H "Content-Type: application/json; charset=utf-8" | jq
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYjFkNmMzMjAxZTQyMTNlYWUwYThlMiJ9LCJleHAiOjE1ODg3MTM3NTYsImlhdCI6MTU4ODcxMzE1Nn0.FxXv9jOxgVl7UtUXhGvBxDTk7OYveGWAucsveD8zhmo"
}
```

Or Log in

```sh
curl -s -X POST localhost:3000/auth/login --data '{
  "email": "coolz@gmail.com",
  "password": "coolz"
}' -H "Content-Type: application/json; charset=utf-8" | jq
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYjFkYTI4OTJlM2Y4MTYyMjc5NGIzOSJ9LCJleHAiOjE1ODg3MTUxMTMsImlhdCI6MTU4ODcxNDUxM30.ounmzzR0UrvMzSQetBtTreaSzY9dTbzyNrTHSoXJuUo"
}
```

Use the token:

```sh
curl -s localhost:3000/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlYjFkYTI4OTJlM2Y4MTYyMjc5NGIzOSJ9LCJleHAiOjE1ODg3MTU3MjksImlhdCI6MTU4ODcxNTEyOX0.aAfDxBQ9ioI7lAAij8T24ohkXzSXyK7hAjXfI7nhRLs"
```

```json
[
...
  {
    "_id": "5eb1d08f381b441053764e3d",
    "email": "coolesterz@gmail.com",
    "createdAt": "2020-05-05T20:46:07.304Z",
    "updatedAt": "2020-05-05T20:46:07.304Z"
  },
...
]
```

### Invalid password

```sh
curl -s -X POST localhost:3000/auth/login --data '{
  "email": "coolz@gmail.com",
  "password": "coolz"
}' -H "Content-Type: application/json; charset=utf-8" | jq
```

```json
{
  "error": {
    "message": "unauthorized",
    "status": 401,
    "statusCode": 401
  }
}
```
