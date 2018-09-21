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
    labels.map((label, key) => console.log('map', key, label.description));
    return labels;
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

module.exports = imageRecognition;