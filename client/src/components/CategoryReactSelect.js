import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';
import { postForm } from '../redux/actions/index';

const CategoryReactSelect = (props) => {
  const {
    options,
    label,
    inputClass,
    isSmallResolution,
    input,
    input:
      { value },
    meta,
    dispatch,
    template,
    init,
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
    // Adds styles to category select
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

  const onInputChange = (valueToChange) => {
    const optionsLength = options.length;
    const newOptions = [];
    const labels = [];
    const newState = { ...init };
    let optionValue = 0;

    valueToChange.forEach((values) => {
      optionValue = values.value.split('.');
      for (let i = 0; i < optionsLength; i += 1) {
        if (optionValue[0] === options[i].value) {
          labels.push(options[i].label);
        }
      }
    });

    const cat = { value: optionValue[0] };
    // Compare category to templates
    for (let i = 0; i < template.templates[0].length; i++) {
      if (template.templates[0][i].temp_id === cat.value) {
        newState.description = template.templates[0][i].content;
      }
    }

    // Dispatch description from matching template
    dispatch(change('simple', 'description', newState.description));

    // Adds parent category to sub category
    for (let j = 0; j < labels.length; j += 1) {
      if (valueToChange[j].label.search(labels[j]) !== 0) {
        newOptions.push({
          label: `${labels[j]} | ${valueToChange[j].label}`,
          value: valueToChange[j].value,
        });
      } else {
        newOptions.push({
          label: valueToChange[j].label,
          value: valueToChange[j].value,
        });
      }
    }

    return input.onChange(newOptions.length === 0 ? '' : valueToChange);
  };

  return (
    <div className={`${isSmallResolution ? null : 'row'} `}>
      <label className={`${isSmallResolution ? null : 'col-3'} `}>{label}</label>
      <div className={`${isSmallResolution ? null : inputClass} `}>
        <Select
          {...props}
          value={value}
          className="esimerkki"
          onChange={onInputChange}
          onBlur={() => input.onBlur(input.value)}
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

const CategorySelect = reduxForm({
  form: 'simple',
  destroyOnUnmount: false,
})(CategoryReactSelect);

const mapStateToProps = state => ({
  template: state.templates,
});

const mapDispatchToProps = () => ({
  postForm,
});


export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
