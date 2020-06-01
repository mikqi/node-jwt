const bcrypt = require('bcryptjs')
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
  res.json({
    message: 'Login',
  })
}

module.exports.handleGetUser = (req, res) => {
  res.json({
    message: 'Get User',
  })
}
