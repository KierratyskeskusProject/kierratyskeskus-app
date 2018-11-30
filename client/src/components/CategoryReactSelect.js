import React, { Fragment } from 'react';
import Select from 'react-select';
import _ from 'lodash';

const CategoryReactSelect = (props) => {
  const {
    options, label, input: { value },
  } = props;

  function onInputChange(valueToChange) {
    const optionsLength = props.options.length;
    const newOptions = [];
    const labels = [];

    _.forEach(valueToChange, (values) => {
      const optionValue = values.value.split('.');
      for (let i = 0; i < optionsLength; i += 1) {
        if (optionValue[0] === props.options[i].value) {
          labels.push(props.options[i].label);
        }
      }
    });

    for (let j = 0; j < labels.length; j += 1) {
      if (valueToChange[j].label.search(labels[j]) !== 0) {
        newOptions.push({ label: `${labels[j]} | ${valueToChange[j].label}`, value: valueToChange[j].value });
      } else {
        newOptions.push({ label: `${valueToChange[j].label}`, value: valueToChange[j].value });
      }
    }

    return props.input.onChange(newOptions);
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
