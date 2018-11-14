const jsonData = require('./data.json');

const text = [];


const filter = (results) => {
  let result = results.indexOf('ISBN');
  let res = null;

  switch (result) {
    case -1:
      break;
    default:
      // ISBN found
      result += 1;
      result = results[result];
      res = result;
      break;
  }
  return res;
};

const detection = () => {
  const detections = jsonData;
  detections.forEach((value, index) => {
    if (index < 1) return;
    text.push(value.description);
  });
  return text;
};

const combined = () => {
  const results = detection();
  const identifier = filter(results);
  console.log(identifier);
  return identifier;
};


module.exports = combined;
