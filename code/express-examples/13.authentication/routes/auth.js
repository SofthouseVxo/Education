const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

const {jwtSecret, minutesValid} = require('../middlewares/authentication')

const generateToken = (user) => {
  // Gets expiration time
  const expiration =
    Math.floor(Date.now() / 1000) + 60 * minutesValid
  console.log(expiration)
  return jwt.sign(
    {
      //claims
      exp: expiration,
      iat: Math.floor(Date.now() / 1000),
      sub: user
    },
    jwtSecret
  )
}

signup = (req, res, next) => {
  req.models.User.create({
    email: req.body.email,
    password: req.body.password
  }).then((user) => {
    return res.status(201).send(
      {
        token: generateToken(user._id)
      }
    )
  }).catch((error) => next(error))
}

login = (req, res, next) => {
  req.models.User.findOne({
    email: req.body.email
  }).then((user) => {
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) next(err)
      if(isMatch) {
        return res.status(200).send(
          {
            token: generateToken(user._id)
          })
        } else {
          return res.status(401).send({
            error: {
              message: "unauthorized",
              status: 401,
              statusCode: 401
            }
          })
        }
      })  
  }).catch((error) => next(error))
}

router.post('/signup', signup);
router.post('/login', login);

module.exports = router