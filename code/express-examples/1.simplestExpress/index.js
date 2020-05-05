const express = require("express");
const app = express();

// environment variable PORT or 3000 if unset
// change by executing "export PORT=2000" in bash before starting
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({"Hello": "World"});
});

// Start up server and begin listen to requests
const listener = app.listen(port, () => {
  // be nice to your user and tell them what port it started on
  console.info(`Server is listening on port ${listener.address().port}.`);
});