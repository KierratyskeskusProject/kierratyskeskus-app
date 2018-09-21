const ImageCapture = require('../controllers/captureImg.controller');

const CaptureImg = (app) => {
  app.get('/captureImg', (req, res) => {
    console.log(ImageCapture);
    ImageCapture((err, image, next) => {
      if (err) return next(err);
      console.log('image', image);
      res.send(image);
      return null;
    });
  });
};
module.exports = CaptureImg;
