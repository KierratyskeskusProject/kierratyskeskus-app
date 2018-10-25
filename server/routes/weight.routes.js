const scale = require('../controllers/weight.controller');

const WeightRoutes = (app) => {
  app.get('/weight', (req, res) => {
    scale((error, data) => {
      res.send(data);
    });
  });
};

module.exports = WeightRoutes;
