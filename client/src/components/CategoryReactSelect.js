import React from 'react';
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
  const {
    options, label, inputClass, isSmallResolution, input: { value },
  } = props;
  return (
    <div className={`${isSmallResolution ? null : 'row'} `}>
      <label className={`${isSmallResolution ? null : 'col-3'} `}>{label}</label>
      <div className={`${isSmallResolution ? null : inputClass} `}>
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
      </div>
    </div>
  );
};

export default CategoryReactSelect;
export { categoryList };
