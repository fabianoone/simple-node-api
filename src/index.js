const express = require('express')
const sequelize = require('./config/database')
const productRoutes = require('./routes/product.routes')
const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(3333, () => {
  console.log(`Server started on port 3333 🔥`);
})