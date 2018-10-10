import React from 'react';

export default (field) => {
  const {
    meta: { touched, error },
  } = field;

  return (
    <div className="form-group">
      <label>Product Description</label>
      <textarea
        className={`form-control ${touched && error ? 'is-invalid' : ''}`}
        rows="3"
        {...field.input}
      />
      <div className="invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};
