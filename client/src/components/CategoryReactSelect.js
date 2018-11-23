import React, { Fragment } from 'react';
import Select from 'react-select';

const CategoryReactSelect = (props) => {
  const {
    options, label, input: { value }, meta,
  } = props;
  console.log('Category', props);

  const className = `form-group ${meta.touched && meta.error ? 'is-invalid' : ''}`;

  const onInputChange = (valueToChange) => {
    console.log('valuetochange', valueToChange);

    return props.input.onChange(valueToChange.length === 0 ? '' : valueToChange);
  };

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
      />
      <div className={className}>
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryReactSelect;
