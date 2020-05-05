const express = require('express')
// create a router that maps path and method to functions
const router = express.Router()

//include the module helloworld.js
const helloWorld = require('./helloWorld.js')

// on the path "/" with method get run the function hello exported by the helloWorld module
router.get("/", helloWorld.hello);

// export the router so it can be added to express using app.use in the root index.js
module.exports = router