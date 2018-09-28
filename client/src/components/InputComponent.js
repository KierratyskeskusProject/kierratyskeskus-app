import React from 'react';

export default ({ input, label, meta }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type="text" className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`} />
    <div className="invalid-feedback">{meta.touched ? meta.error : ''}</div>
  </div>
);
