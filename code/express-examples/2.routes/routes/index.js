const express = require('express')
const router = express.Router()

const helloWorld = require('./helloWorld.js')

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

router.get("/", helloWorld.hello);

module.exports = router