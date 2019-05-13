# Simple Node with Express + MongoDB Server

A simple mongodb rest api used in training, where focus is on simplicity and clarity, not actually writing the best, most efficient api.

The API is meant to mimic https://jsonplaceholder.typicode.com/ for post and user enpoints, which means there's a bit of a hack to get sequential IDs.

An easy way to get started with a Express server with MongoDB with Node.js. [Read more about it.](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)

## Features

* Babel 7
* Environment Variables
* Express
* REST API
* MongoDB

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:rwieruch/node-express-mongodb-server.git`
* `cd node-express-mongodb-server`
* `npm install`
* [start MongoDB](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)
  - or `docker run -d -p 27017:27017 mongo`
* `npm start`
* optional: include *.env* in your *.gitignore*

### Populate Data

* npm run data

### GET Routes

* visit http://localhost:3000
  * /posts
  * /posts/1
  * /users
  * /users/1

### Beyond GET Routes

#### CURL

* Create a user with:

```sh
  curl -i -X POST -H "Content-Type:application/json" http://localhost:3000/users -d  '{
    "name": "Me Myself and I",
    "username": "unique me",
    "email": "unique@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
  }'
```

* Replace a user with:

```sh
  curl -i -X PUT -H "Content-Type:application/json" http://localhost:3000/users/11 -d  '{
    "name": "Me Myself and I",
    "username": "new unique me",
    "email": "newunique@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
  }'
```

* Create a post with:
  * `curl -i -X POST -H "Content-Type:application/json" http://localhost:3000/posts -d '{"title":"Hi, World", "body":"Fresh as morning dew", "userId": "1"}'`
* Replace a post with:
  * `curl -i -X PUT -H "Content-Type:application/json" http://localhost:3000/posts/1 -d '{"title":"Hi again, World", "body":"Replaced by this", "userId": "2"}'`
* update a post with:
  * `curl -i -X PATCH -H "Content-Type:application/json" http://localhost:3000/posts/1 -d '{"title":"Hi again, New World", "userId": "3"}'`
* Delete a post with:
  * `curl -i -X DELETE -H "Content-Type:application/json" http://localhost:3000/posts/1`
* Get Post by user:
  * `curl -i -H "Content-Type:application/json" http://localhost:3000/posts?userId=1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a post with:
  * URL: http://localhost:3000/posts
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Replace a post with:
  * URL: http://localhost:3000/posts/1
  * Method: PUT
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Update a post with:
  * URL: http://localhost:3000/posts/1
  * Method: PATCH
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Delete a post with:
  * URL: http://localhost:3000/posts/1
  * Method: DELETE
