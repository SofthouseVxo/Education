// Return JSON errors, with code
const error = (error, req, res, next) => {
  console.error(error)
  if (res.headersSent) {
    return next(err)
  }
  // in case of a mongo error, the middleware below has set the error to 400 and the proper code is reported
  res.status(error.statusCode || error.status || 500).send({error: error })
}

const mongoError = (error, req, res, next) => {
  // in case of an error with name ValidationError, set status code 400
  if(error.name === "ValidationError"){
      error.statusCode = 400;
      error.status = 400;
  }
  // go to the next middleware
  next(error)
}

module.exports = {
  error,
  mongoError
}


