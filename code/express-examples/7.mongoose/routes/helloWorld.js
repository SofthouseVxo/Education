
hello = (req, res) => {
  response = {
    "Hello": "World",
    "query": req.query,
    "params": req.params,
    "headers": req.headers}

  res.send(response);
};

module.exports = {
  hello: hello,
  params: hello
} 