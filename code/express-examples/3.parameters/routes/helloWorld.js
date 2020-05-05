
// same function as before...
hello = (req, res) => {
  res.send({"Hello": "World"});
};

// a new function
params = (req, res) => {
  response = {
    "Hello": "World",
    "query": req.query,
    "params": req.params,
    "headers": req.headers}

  res.send(response);
};

module.exports = {
  hello: hello,
// a new export
  params: params
} 