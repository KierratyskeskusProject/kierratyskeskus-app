import React from 'react';

export default ({ input, label }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type="text" className="form-control" />
  </div>
);
