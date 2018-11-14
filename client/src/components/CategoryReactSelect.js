import React, { Component } from 'react';
import Select from 'react-select';

const scaryAnimals = [
  { label: 'Alligators', value: 1 },
  { label: 'Crocodiles', value: 2 },
  { label: 'Sharks', value: 3 },
  { label: 'Small crocodiles', value: 4 },
  { label: 'Smallest crocodiles', value: 5 },
  { label: 'Snakes', value: 6 },
];


export default class CategoryReactSelect extends Component {
  render() {
    return (
      <Select
        options={scaryAnimals}
        placeholder="Select a scary animal"
        isMulti
        blurInputOnSelect={false}
      />
    );
  }
}
