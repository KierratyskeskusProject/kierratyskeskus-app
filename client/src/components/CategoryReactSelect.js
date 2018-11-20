import React, { Fragment } from 'react';
import Select from 'react-select';

const categoryList = [
  { label: 'Kitchenware', value: 1 },
  { label: 'Bicycles', value: 2 },
  { label: 'Books', value: 3 },
  { label: 'Electronics', value: 4 },
  { label: 'Furniture', value: 5 },
  { label: 'Clothes', value: 6 },
];

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
export { categoryList };
