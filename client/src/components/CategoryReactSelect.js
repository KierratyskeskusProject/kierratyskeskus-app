import React, { Fragment } from 'react';
import Select from 'react-select';

const CategoryReactSelect = (props) => {
  const {
    options, label, inputClass, isSmallResolution, input: { value }, meta,
  } = props;

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
      backgroundColor: meta.error && meta.touched
        ? state.isFocused ? 'rgba(220, 53, 69, 0.15)' : 'rgb(255, 255, 255)'
        : state.isFocused ? 'rgba(0, 167, 126, 0.15)' : 'rgb(255, 255, 255)',
      ':hover': {
        backgroundColor: meta.error && meta.touched ? 'rgba(220, 53, 69, 0.15)' : 'rgba(0, 167, 126, 0.15)',
      },
    }),
  };

  const onInputChange = valueToChange => props.input.onChange(valueToChange.length === 0 ? '' : valueToChange);

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
