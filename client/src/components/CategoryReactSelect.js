import React, { Fragment } from 'react';
import Select from 'react-select';

const CategoryReactSelect = (props) => {
  const {
    options, label, input: { value },
  } = props;
  console.log('Category', props);

  function onInputChange(valueToChange) {
    console.log('kekke');
    return props.input.onChange(valueToChange);
  }

  return (
    <Fragment>
      <label>{label}</label>
      <Select
        {...props}
        value={value}
        onChange={onInputChange}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={options}
        placeholder="Select a category"
        isMulti
        blurInputOnSelect={false}
        classNamePrefix="form-control"
      />
    </Fragment>
  );
};

export default CategoryReactSelect;
