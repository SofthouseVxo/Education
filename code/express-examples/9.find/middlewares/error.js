// Return JSON errors, with code
const error = (error, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(error.statusCode || error.status || 500).send({error: error })
}

module.exports = {
  error
}


