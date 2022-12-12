const Product = require('../models/productModels')

module.exports = {
  async all(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products)
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  }
}