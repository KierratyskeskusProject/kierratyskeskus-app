import React from 'react';
import _ from 'lodash';
import Fields from './Fields';

export default (field) => {
  const {
    meta: { touched, error },
  } = field;

  const { label } = _.find(Fields, { label: 'Category' });

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className={`form-control ${touched && error ? 'is-invalid' : ''}`}
        {...field.input}
      />
      <div className="invalid-feedback">{touched ? error : ''}</div>
    </div>
  );
};
