const fs = require('fs');
//const automl = require('@google-cloud/automl').v1beta1;

/*
const clientX = new automl.PredictionServiceClient({
  keyFilename: `${__dirname}/googleKey.json`,
});
*/
const projectId = "visiontest-219510";
const computeRegion = "us-central1";
const modelId = "ICN6050670801467858292";
const image = "./image.jpg";

const prediction = (image) => {
  let category = null;

  const modelFullId = clientX.modelPath(projectId, computeRegion, modelId);

  const content = fs.readFileSync(image, 'base64');

  const params = {};

  const payload = {};
  payload.image = {imageBytes: content};

  clientX
    .predict({name: modelFullId, payload: payload, params: params})
    .then(responses => {
      console.log(`Prediction results:`);
      responses[0].payload.forEach(result => {
        console.log(result.displayName);

        return category;
      });
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = prediction;
