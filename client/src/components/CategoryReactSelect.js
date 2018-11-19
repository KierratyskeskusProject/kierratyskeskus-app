import React from 'react';
import Select from 'react-select';

const scaryAnimals = [
  { label: 'Alligators', value: 1 },
  { label: 'Crocodiles', value: 2 },
  { label: 'Sharks', value: 3 },
  { label: 'Small crocodiles', value: 4 },
  { label: 'Smallest crocodiles', value: 5 },
  { label: 'Snakes', value: 6 },
];

const CategoryReactSelect = (props) => {
  const { options, label, input: { value } } = props;
  return (
    <React.Fragment>
      <label>{label}</label>
      <Select
        {...props}
        value={value}
        onChange={valueToChange => props.input.onChange(valueToChange)}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={options}
        placeholder="Select a scary animal"
        isMulti
        blurInputOnSelect={false}
      />
    </React.Fragment>
  );
};

export default CategoryReactSelect;
export { scaryAnimals };
