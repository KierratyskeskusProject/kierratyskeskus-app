import React from 'react';
import UpdateWeightButton from './UpdateWeightButton';
import CategoryReactSelect from './CategoryReactSelect';

// Responsible for rendering right fields for the form and adding them to redux-form
// This component also renders errors for the fields if there are any errors in the error object

export default ({
  input,
  label,
  meta,
  actualValue,
}) => (
  <div>
    {<label>{label}</label>}
    <div
      className={`${label === 'Product weight'
        ? 'input-group'
        : 'form-group'}`}
    >
      {label !== 'Product Description' && label !== 'Category'
        ? (
          <input
            {...input}
            type="text"
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            value={label === 'Product weight' ? actualValue : null}
          />
        )
        : null}
      {label === 'Product Description'
        ? (
          <textarea
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            rows="5"
            {...input}
          />
        )
        : null}
      {label === 'Product weight'
        ? <UpdateWeightButton />
        : null}
      {label === 'Category'
        ? <CategoryReactSelect />
        : null}
      <div
        className="invalid-feedback"
      >
        {meta.touched ? meta.error : ''}
      </div>
    </div>
  </div>
);
