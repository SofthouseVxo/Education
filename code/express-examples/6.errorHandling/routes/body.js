body = (req, res) => {
  console.log(req.body)
  res.json(req.body);
};

module.exports = {
  body: body
} 