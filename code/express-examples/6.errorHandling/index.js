const express = require("express");

//import our new middlewares
const middlewares = require("./middlewares")
const routes = require("./routes")

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
// in case of error
app.use(middlewares.error)
// in case nothing matched
app.use(middlewares.notfound)

const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
})