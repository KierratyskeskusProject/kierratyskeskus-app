const Products = require('../controllers/products.controller');

const ProductRoutes = (app) => {
  app.get('/all', (req, res) => {
    Products.getAll((err, products, next) => {
      if (err) return next(err);
      res.send(products);
      return null;
    });
  });
};

module.exports = ProductRoutes;
