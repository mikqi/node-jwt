module.exports.handleSignup = (req, res) => {
  res.json({
    message: 'signup',
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
