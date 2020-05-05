const jwt = require('jsonwebtoken')

const minutesValid = process.env.JWT_EXPIRATION_IN_MINUTES || 10
const jwtSecret = process.env.JWT_SECRET || "vPeasCWYwhkF33521MdFFN8vNyRRqlNLBpwHGxeLWN027ju1c8WEh0ZGPJZ72zsA"

const ensureAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({
      error: {
        message: "Missing Auth Token",
        status: 401,
        statusCode: 401
      } 
    });
  }
  var token = req.headers.authorization.split(' ')[1];

  var payload = {};
  try {
    payload = jwt.verify(token, jwtSecret, {complete: true}).payload;
  }
  catch (err) {
    next(err)
    return res.status(401).send({
      error: {
        message: "Invalid Auth Token",
        status: 401,
        statusCode: 401
      } 
    });
  }
  if (payload.exp <= new Date().getTime() / 1000) {
    return res.status(401).send({
      error: {
        message: "Expired Auth Token",
        status: 401,
        statusCode: 401
      } 
    });
  }
  // check if the user exists
  req.models.User.findById(payload.sub).then((user) => {
    if (!user){
      return res.status(401).send({
        error: {
          message: "Invalid User",
          status: 401,
          statusCode: 401
        } 
      });
    } else {
      req.user = payload.sub;
      next();
    }
  });
};

module.exports = {
  ensureAuthenticated,
  jwtSecret,
  minutesValid
}