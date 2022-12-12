
module.exports = {
  async all(req, res) {
    res.json ({
      findAll: [
        {title: 'Product 1', price: 10.00},
        {title: 'Product 2', price: 20.00},
        {title: 'Product 3', price: 30.00},
      ]
    })
  }
}