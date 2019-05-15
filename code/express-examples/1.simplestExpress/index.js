const express = require("express");
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({"Hello": "World"});
});

// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});