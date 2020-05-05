const express = require('express')
const router = express.Router()

const helloWorld = require('./helloWorld.js')
const methods = require('./methods.js')
const body = require('./body.js')

// Time will be logged for all calls to this middleware
// Time: 2020-05-05T09:20:37.396Z Method POST path /body
// Uses the system default time zone so it may vary
router.use(function timeLog (req, res, next) {
  console.log(
  'Time:', new Date().toISOString(), 
  'Method', req.method,
  'path', req.url)
  next()
})

// new route here
router.post("/body", body.body)

router.get("/methods", methods.get)
router.post("/methods", methods.post)
router.put("/methods", methods.put)
router.delete("/methods", methods.delete)

router.get("/", helloWorld.hello)
//Routes are evaluated in order so pathParameter has to come after get /methods otherwise it would match get / with the pathParameter "methods"
router.get("/:pathParameter", helloWorld.params)

module.exports = router