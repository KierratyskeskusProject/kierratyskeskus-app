const filter = (responseText) => {
  let result = responseText.match(/ISBN(-1(?:(0)|3))?:?\x20(\s)*[0-9]+[- ][0-9]+[- ][0-9]+[- ][0-9]*[- ]*[xX0-9]/);
  let res = null;

  switch (result) {
    case -1:
      break;
    default:
      // ISBN found
      result += 1;
      result = responseText[result];
      res = result;
      break;
  }
  return res;
};


module.exports = { filter };
