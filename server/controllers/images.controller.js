const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
const { googleKey } = require('../config');

const client = new vision.ImageAnnotatorClient({
  keyFilename: googleKey,
});


const createImageName = () => {
  const dir = path.join(__dirname, '../images/');
  const newName = Date.now();
  return `${dir + newName}.jpg`;
};

const imageToBase64 = (file) => {
  const image = fs.readFileSync(file);
  return new Buffer.from(image).toString('base64'); // eslint-disable-line new-cap
};

let image = createImageName();

const Capture = (res) => {
  image = createImageName();
  // to take picture from external web cam add name of device  as parameter to nodeWebcam.create({})
  const anotherCam = nodeWebcam.create();

  anotherCam.capture(image, () => {
    const promises = [
      client
        .labelDetection(image)
        .then(results => results)
        .catch(error => res.send(error)),
      client
        .textDetection(image)
        .then(textResults => textResults)
        .catch(error => res.send(error))];


    Promise.all(promises)
      .then((values) => {
        const collection = { labels: [], text: [], imageInBase64: '' };
        const labelsArray = [];
        const textArray = [];

        values.forEach((value) => {
          value.map((item) => {
            item.labelAnnotations.map(label => labelsArray.push(label.description));
            item.textAnnotations.map(text => textArray.push(text.description));
            return null;
          });
        });

        collection.text = textArray;
        collection.imageInBase64 = imageToBase64(image);
        collection.labels = labelsArray;
        res.send(collection);
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });
  });
};


const Send = (res) => {
  res.sendFile(image);
};


module.exports = { Capture, Send };
