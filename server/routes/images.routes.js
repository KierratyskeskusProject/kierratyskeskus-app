const ImagesController = require('../controllers/images.controller');

const ImagesRoutes = (app) => {
  const { Capture, Send, Delete } = ImagesController;

  app.get('/capture', (req, res) => {
    Capture(res);
  });

  app.get('/image', (req, res) => {
    Send(res);
  });

  app.delete('/delete_image', (req, res) => {
    console.log('SEND', req.body);
    Delete(res, req.body.imageName);
  });
};

module.exports = ImagesRoutes;
