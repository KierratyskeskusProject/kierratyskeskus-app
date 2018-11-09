import React from 'react';
import _ from 'lodash';
import Fields from './Fields';

export default (field) => {
  const {
    meta: { touched, error },
  } = field;

  const { label } = _.find(Fields, { label: 'Product Description' });

  return (
    <div className="form-group">
      <label>{label}</label>
      <textarea
        className={`form-control ${touched && error ? 'is-invalid' : ''}`}
        rows="5"
        {...field.input}
      />
      <div className="invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};
