const express = require('express')
const router = express.Router()
const {ensureAuthenticated} = require('../middlewares/authentication.js')

const user = require('./user.js')
const auth = require('./auth.js')

router.use('/users', ensureAuthenticated, user)
router.use('/auth', auth)

module.exports = router