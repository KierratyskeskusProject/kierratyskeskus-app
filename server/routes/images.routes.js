const ImagesController = require('../controllers/images.controller');

const ImagesRoutes = (app) => {
  const { Capture, Send } = ImagesController;

  app.get('/capture', (req, res) => {
    Capture(res);
  });

  app.get('/image', (req, res) => {
    Send(res);
  });
};

module.exports = ImagesRoutes;
