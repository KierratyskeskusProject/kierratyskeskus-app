const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  keyFilename: `${__dirname}/../../googleKey.json`,
});

const Detection = async (image) => {
  try {
    const promises = [
      client.labelDetection(image),
      client.textDetection(image),
    ];
    const values = await Promise.all(promises);
    const imageInBase64 = imageToBase64(image);
    const responseData = transformData(values, imageInBase64);
    // res.send(responseData);
  } catch (error) {
    responseData = error;
  }
  return responseData;
};

module.exports = { Detection };
