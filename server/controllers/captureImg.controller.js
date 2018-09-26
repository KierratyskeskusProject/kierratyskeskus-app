const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  keyFilename: './services/voiceRecognition/key.json',
});

// Performs label detection on the image file
const imageRecognition = () => client
  .labelDetection('./services/imageRecognition/images/image.jpg')
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    const collection = [];
    labels.map(label => collection.push(label));
    return collection;
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

const imageCapture = async () => {
  const anotherCam = nodeWebcam.create();
  anotherCam.capture('./services/imageRecognition/images/image.jpg', () => {
    imageRecognition();
  });
};

module.exports = { imageCapture, imageRecognition };
