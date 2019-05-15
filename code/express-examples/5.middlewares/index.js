const express = require("express");
const morgan = require('morgan')

const routes = require("./routes")
const middleware = require("./middleware")
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

// request logging

// custom logging format, see npm morgan for format
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/', routes)

// custom 404 page
app.use(middleware.notFound)

// custom 500 page
app.use(middleware.errorHandler)

// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});