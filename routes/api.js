const router = require('express').Router()
const expressJwt = require('express-jwt')
const AuthCtrl = require('../controllers/auth')

const jwtCheck = expressJwt({
  secret: 'somesupersecretkeythatnobodycanhaveitjustdeveloperonly!??!!!??!',
})

router.post('/login', AuthCtrl.handleLogin)
router.post('/signup', AuthCtrl.handleSignup)
router.get('/me', jwtCheck, AuthCtrl.handleGetUser)

module.exports = router
