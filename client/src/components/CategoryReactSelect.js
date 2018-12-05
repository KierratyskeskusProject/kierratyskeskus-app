import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

const CategoryReactSelect = (props) => {
  const {
    options, label, inputClass, isSmallResolution, input: { value }, meta,
  } = props;

  function isItValid(state) {
    // Picks background color of options
    if (meta.error && meta.touched && state.isFocused) {
      return 'rgba(220, 53, 69, 0.15)';
    }
    if (state.isFocused) {
      return 'rgba(0, 167, 126, 0.15)';
    }
    return 'rgb(255, 255, 255)';
  }

  const customStyles = {
    control: base => ({
      ...base,
      marginBottom: meta.error && meta.touched ? '0' : '1rem',
      boxShadow: 'none',
      border: meta.error && meta.touched ? '2px solid rgb(220, 53, 69)' : '2px solid rgb(0, 167, 126)',
      ':hover': {
        border: meta.error && meta.touched ? '2px solid rgb(220, 53, 69)' : '2px solid rgb(0, 167, 126)',
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: isItValid(state),
      ':hover': {
        backgroundColor: meta.error && meta.touched ? 'rgba(220, 53, 69, 0.15)' : 'rgba(0, 167, 126, 0.15)',
      },
    }),
  };

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

    return props.input.onChange(newOptions.length === 0 ? '' : newOptions);
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
          styles={customStyles}
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
