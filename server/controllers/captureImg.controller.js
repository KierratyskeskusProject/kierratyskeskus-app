const imageCapture = require('../../services/imageRecognition/imageCapture');

const ImageCapture = () => {
  console.log('imageCapture', imageCapture);
  const t = imageCapture();
  console.log('t', t);
};

module.exports = ImageCapture;
