const express = require('express')
const router = express.Router()

const helloWorld = require('./helloWorld.js')
const methods = require('./methods.js')

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

router.get("/methods", methods.get)
router.post("/methods", methods.post)
router.put("/methods", methods.put)
router.delete("/methods", methods.delete)

router.get("/", helloWorld.hello)
//Routes are evaluated in order so pathParameter has to come after get /methods otherwise it would match get / with the pathParameter "methods"
router.get("/:pathParameter", helloWorld.params)

module.exports = router