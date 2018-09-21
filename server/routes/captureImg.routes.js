const ImageCapture = require('../controllers/captureImg.controller');

const CaptureImg = (app) => {
  app.get('/captureImg', (req, res) => {
    ImageCapture.getCapturedImg((err, image, next) => {
      if (err) return next(err);
      console.log(image);
      res.send(image);
      return null;
    });
  });
};
module.exports = CaptureImg;
