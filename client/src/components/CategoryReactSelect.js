import React, { Fragment } from 'react';
import Select from 'react-select';

/* const categoryList = [
  {
    label: 'Kitchenware',
    value: 1,
    options: [{
      label: 'Plate',
      value: 1.1,
    }],
  },
  {
    label: 'Bicycles',
    value: 2,
    options: [{
      label: 'Wheel',
      value: 2.1,
    }],
  },
  {
    label: 'Books',
    value: 3,
    options: [{
      label: 'History',
      value: 3.1,
    },
    {
      label: 'Fantasy',
      value: 3.2,
    },
    ],
  },
  { label: 'Electronics', value: 4 },
  { label: 'Furniture', value: 5 },
  { label: 'Clothes', value: 6 },
]; */

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
