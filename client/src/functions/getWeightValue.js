const setWeight = (actualValue, inputValue) => {
  console.log('inputValue', inputValue);
  const actualValueInt = parseInt(actualValue, 10);
  console.log('actualValue', actualValueInt);
  if (actualValueInt === 0) {
    return inputValue;
  }
  return actualValue;
};

// eslint-disable-next-line import/prefer-default-export
export { setWeight };
