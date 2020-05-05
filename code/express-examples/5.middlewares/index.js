const express = require("express");

const routes = require("./routes")
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use((req,res,next) => {
  console.log("going down the middleware chain")
  next()
  console.log("going back up again")
})

// Add middleware for parsing the body to req.body
// middlewares are executed in the order added, so add before routes
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});