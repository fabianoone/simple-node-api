const express = require('express')
const sequelize = require('./config/database')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ msg: 'Hello API'})
})

app.listen(3333, () => {
  console.log(`Server started on port 3333 🔥`);
})