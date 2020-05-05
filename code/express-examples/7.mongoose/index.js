const express = require("express");

const middlewares = require("./middlewares")
const routes = require("./routes")
// import index.js in ./models
const db = require("./models")

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/', routes)
app.use(middlewares.error)
app.use(middlewares.notfound)

// Start up the database, then the server and begin listen to requests
db.connectDb().then(() => {
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  })
});