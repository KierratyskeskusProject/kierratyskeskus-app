const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  keyFilename: `${__dirname}/key.json`,
});

// Performs label detection on the image file
client
  .labelDetection('./resources/cat.jpg')
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
