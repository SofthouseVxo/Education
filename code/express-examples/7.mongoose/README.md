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

Create a user

```sh
curl -s -X POST localhost:3000/users --data '{
  "name": "string",
  "username": "string",
  "email": "string@email.eml",
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
```

```json
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
  "email": "string@email.eml",
  "__v": 0
}
```

### check if the user was created

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

yes it was

### unique

Creating another fails after the first call, why?

```sh
curl -s -X POST localhost:3000/users --data '{
  "name": "string",
  "username": "string",
  "email": "string@email.eml",
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
}' -H "Content-Type: application/json; charset=utf-8"
```

Read the error:

```html
<body>
<pre>MongoError: E11000 duplicate key error collection: example.users index: email_1
```

email is not unique

### email validator

what if users input something other than an email address?

```sh
curl -s -X POST localhost:3000/users --data '{
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
}' -H "Content-Type: application/json; charset=utf-8"
```

Read the error:

```html
<pre>ValidationError: User validation failed: email: Validator failed for path `email
```

## body not matching the Schema will be omitted

If the schema doesn't match what's being sent?

```js
const userSchema = new mongoose.Schema({
  user: { //schema has a user object at the root, this is fine as long as you're consistent
    name: String,
    username: {
      type: String,
      require: true,
    }
}
```

then the body needs to match or you will get an empty object containing everything that matched:

```js
post = (req, res, next) => {
  req.models.User.create({
    name: req.body.name,
```

Would result in an email validation failure since email is null.
If you don't have email validation fail on uniqueness because you have two null emails
If there's no validation or uniqueness, you'll get an empty user object.

```json
user: {"_id": "5eb1359f5dba65dfe8940fd7", "__v": 0}
```

should actually then be:

```js
post = (req, res, next) => {
  req.models.User.create({
    user: {
      name: req.body.name,
```
