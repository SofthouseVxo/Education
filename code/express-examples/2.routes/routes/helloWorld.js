
// same function as before...
hello = (req, res) => {
  res.send({"Hello": "World"});
};

// just in a separate file and exported as a module
module.exports = {
  hello: hello
} 