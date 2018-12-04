import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

const CategoryReactSelect = (props) => {
  const {
    options, label, inputClass, isSmallResolution, input: { value }, meta,
  } = props;
  console.log('Category', props);

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

    return props.input.onChange(newOptions.length === 0 ? '' : valueToChange);
  }

  return (
    <div className={`${isSmallResolution ? null : 'row'} `}>
      <label className={`${isSmallResolution ? null : 'col-3'} `}>{label}</label>
      <div className={`${isSmallResolution ? null : inputClass} `}>
        <Select
          {...props}
          value={value}
          className="esimerkki"
          onChange={onInputChange}
          onBlur={() => props.input.onBlur(props.input.value)}
          options={options}
          placeholder="Select a category"
          isMulti
          blurInputOnSelect={false}
        />
        <div>
          <div className="invalid-category">
            {meta.touched ? meta.error : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryReactSelect;
