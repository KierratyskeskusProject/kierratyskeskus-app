import React from 'react';

export default ({ input, label, meta }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="text" className="form-control" />
    {meta.touched ? meta.error : ''}
  </div>
);
