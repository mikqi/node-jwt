const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = 3001

mongoose.connect('mongodb://localhost:27017/node-jwt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome',
  })
})

app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
  console.log(`App run on http://localhost:${PORT}`)
})
