# Error Handling

Adds an error handling middleware that returns the error as JSON

## Setting it up from scratch

```sh
npm install --save-dev chai mocha should sinon sinon-mongoose supertest
```

Add the following script to `package.json`

```json
"test": "NODE_ENV=test mocha ./tests --recursive"
```

In [index.js](index.js)

add the following to not connect to mongo when running in test mode:

```js
if(process.env.NODE_ENV != "test") {
  db.connectDb().then(() => {
```

Add test cases in `tests/routes/<route>.test.js`

See [tests/routes/user.test.js](tests/routes/user.test.js)
