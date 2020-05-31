const router = require('express').Router()
const AuthCtrl = require('../controllers/auth')

router.post('/login', AuthCtrl.handleLogin)
router.post('/signup', AuthCtrl.handleSignup)
router.get('/me', AuthCtrl.handleGetUser)

module.exports = router
