// Return JSON errors, with code
const error = (error, req, res, next) => {
  console.error(error)
  if (res.headersSent) {
    return next(err)
  }
  res.status(error.statusCode || error.status || 500).send({error: error })
}

const mongoError = (error, req, res, next) => {
  if(error.name === "ValidationError"){
      error.statusCode = 400;
      error.status = 400;
  }
  next(error)
}

module.exports = {
  error,
  mongoError
}