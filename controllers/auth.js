const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.handleSignup = (req, res) => {
  const { name, email, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 8)

  const NewUser = new User({
    name,
    email,
    password: hashedPassword,
  })

  NewUser.save((err) => {
    if (err) {
      return res.json({
        message: err,
      })
    }

    res.json({
      message: `success added user ${name}`,
    })
  })
}

module.exports.handleLogin = (req, res) => {
  const { email, password } = req.body

  User.findOne({ email }, (err, user) => {
    if (err) return res.status(500).json({ message: err })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const isPasswordValid = bcrypt.compareSync(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password invalid' })
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      'somesupersecretkeythatnobodycanhaveitjustdeveloperonly!??!!!??!',
      { expiresIn: '1h' }
    )

    res.status(200).json({
      accessToken: token,
    })
  })
}

module.exports.handleGetUser = (req, res) => {
  res.json({
    message: 'Get User',
  })
}
