import React from 'react';
import UpdateWeightButton from './UpdateWeightButton';

export default ({ input, label, meta }) => (
  <div className={`form-group ${label === 'Product weight' ? 'input-group' : ''}`}>
    <label>{label}</label>
    <input {...input} type="text" className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`} />
    {label === 'Product weight' ? <UpdateWeightButton /> : null}
    <div className="invalid-feedback">{meta.touched ? meta.error : ''}</div>
  </div>
);
