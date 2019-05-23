const express = require('express')
const router = express.Router()

const user = require('./user.js')

router.post("/users", user.post)
router.get("/users", user.get)
router.get("/users/:id", user.getById)
router.delete("/users/:id", user.deleteById)
router.put("/users/:id", user.put)
router.patch("/users/:id", user.patch)

module.exports = router