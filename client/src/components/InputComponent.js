import React from 'react';

export default ({ input, label }) => (
  <div className="input">
    <label>{label}</label>
    <input {...input} type="text" style={{ marginBottom: '20px' }} />
  </div>
);
