// return plain 404 if no matching path or method was matched
const notfound = (req, res) => {
  // this is a bad idea since status is available, but nice for development
  res.status(404).json({"error": {"status":404}});
}

module.exports = {
  notfound
}