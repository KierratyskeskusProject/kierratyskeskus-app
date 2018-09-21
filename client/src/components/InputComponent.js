import React from 'react';

export default ({ input, label }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="text" className="form-control" />
  </div>
);
