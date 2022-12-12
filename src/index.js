const express = require('express')
const sequelize = require('./config/database')
const productRoutes = require('./routes/product.routes')
const app = express()

sequelize.sync().then(() => console.log(`database connected succesfully 🏦`))

app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(3333, () => {
  console.log(`Server started on port 3333 🔥`);
})