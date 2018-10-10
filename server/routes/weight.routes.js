const scale = require('../controllers/weight.controller');

const WeightRoutes = (app) => {
  app.get('/weight', (req, res) => {
    scale.read((error, data) => {
      res.send(data);
    });
    res.status(404);
  });
};

module.exports = WeightRoutes;
