const express = require('express')
const router = express.Router()

const user = require('./user.js')

router.post("/users", user.post)
router.get("/users", user.get)
router.get("/users/:id", user.getById)

module.exports = router