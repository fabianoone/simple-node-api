const Product = require('../models/productModels')

module.exports = {
  async all(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  },
  async create(req, res) {
    try {
      await Product.create(req.body)
      res.status(200).json('product inserted!')
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}