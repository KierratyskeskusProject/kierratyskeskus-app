const imageCapture = require('../../services/imageRecognition/imageCapture');

const ImageCapture = () => {
  setTimeout(() => {
    console.log('imagecapture', imageCapture());
  }, 5000);
  imageCapture().then(setTimeout((data) => {
    console.log('data', data);
  }, 5000));
};

module.exports = ImageCapture;
