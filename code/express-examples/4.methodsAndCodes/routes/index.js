const express = require('express')
const router = express.Router()

const helloWorld = require('./helloWorld.js')
const methods = require('./methods.js')

router.get("/methods", methods.getExample)
router.post("/methods", methods.postExample)
router.put("/methods", methods.putExample)
router.delete("/methods", methods.deleteExample)

router.get("/", helloWorld.hello)
//Routes are evaluated in order so pathParameter has to come after get /methods otherwise it would match get / with the pathParameter "methods"
router.get("/:pathParameter", helloWorld.params)

module.exports = router