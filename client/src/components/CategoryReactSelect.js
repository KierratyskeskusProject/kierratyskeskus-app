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
  const { options } = props;
  const { input } = props;
  const { value } = input;
  return (
    <div>
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
    </div>
  );
};

export default CategoryReactSelect;
export { scaryAnimals };
