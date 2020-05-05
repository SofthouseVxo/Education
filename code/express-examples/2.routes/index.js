const express = require("express");
// include the index.js file in the folder routes
const routes = require("./routes")
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

// app.use(routes) listens to all methods
// app.use('/api/', routes) adds an /api prefix to all routes
app.use('/', routes)

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});