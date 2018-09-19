const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  keyFilename: `${__dirname}/key.json`,
});

// Performs label detection on the image file
const imageRecognition = () => client
  .labelDetection('./from_external.jpg')
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

module.exports = imageRecognition;
