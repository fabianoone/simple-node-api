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
  },
  async one(req, res) {
    try {
      const { id } = req.params
      const product = await Product.findOne({ where: { id } })
      if (!product) {
        return res.status(400).json('Product not found')
      }
      res.status(200).json(product)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}