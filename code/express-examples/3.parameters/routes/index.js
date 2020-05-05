const express = require('express')
const router = express.Router()

const helloWorld = require('./helloWorld.js')

// new route with a path parameter
router.get("/:pathParameter", helloWorld.params)

// requests without path parameters will end up here
router.get("/", helloWorld.hello)

// this route is unreachable as it will always be handled by the pathParameter route above
// order is important: Adding this before the pathParameter route will take preceedence
router.get("/willNeverBeCalled", helloWorld.hello)

module.exports = router