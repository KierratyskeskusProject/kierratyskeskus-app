const setWeight = (actualValue, inputValue) => {
  console.log('inputValue', inputValue);
  const actualValueString = actualValue.toString();
  console.log('actualValue', actualValueString);
  if (actualValueString.valueOf() === '0') {
    return inputValue;
  }
  return actualValue;
};

// eslint-disable-next-line import/prefer-default-export
export { setWeight };
