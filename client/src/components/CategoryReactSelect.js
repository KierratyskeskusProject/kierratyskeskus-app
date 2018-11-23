import React, { Fragment } from 'react';
import Select from 'react-select';

const CategoryReactSelect = (props) => {
  const { options, label, input: { value } } = props;
  return (
    <Fragment>
      <label>{label}</label>
      <Select
        {...props}
        value={value}
        onChange={valueToChange => props.input.onChange(valueToChange)}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={options}
        placeholder="Select a category"
        isMulti
        blurInputOnSelect={false}
      />
    </Fragment>
  );
};

export default CategoryReactSelect;
