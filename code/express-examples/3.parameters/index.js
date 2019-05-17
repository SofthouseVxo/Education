const express = require("express");
const routes = require("./routes")
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use('/', routes)

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});