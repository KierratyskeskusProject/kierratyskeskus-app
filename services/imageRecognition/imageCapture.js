const nodeWebcam = require('node-webcam');
const imageRecognition = require('./imageRecognition');

const imageCapture = async () => {
  const anotherCam = nodeWebcam.create();
  anotherCam.capture('./services/imageRecognition/images/image.jpg', (err, data) => {
    if (data) {
      imageRecognition().then(result => result);
    }
    return null;
  });
};

module.exports = imageCapture;
