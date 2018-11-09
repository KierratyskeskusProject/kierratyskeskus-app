import React from 'react';
import UpdateWeightButton from './UpdateWeightButton';

export default ({
  input, label, meta, actualValue,
}) => (
  <div>
    {<label>{label}</label>}
    <div
      className={`${label === 'Product weight'
        ? 'input-group'
        : 'form-group'}`}
    >
      <input
        {...input}
        type="text"
        className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
        value={label === 'Product weight' ? actualValue : null}

      />
      {label === 'Product weight'
        ? <UpdateWeightButton />
        : null}
      <div
        className="invalid-feedback"
      >
        {meta.touched ? meta.error : ''}
      </div>
    </div>
  </div>
);
