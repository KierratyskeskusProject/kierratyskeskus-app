import React from 'react';
import UpdateWeightButton from './UpdateWeightButton';
import ConditionDropdown from './ConditionDropdown';

export default ({ input, label, meta }) => (
  <div>
    {<label>{label}</label>}
    <div className={`${label === 'Product weight' ? 'input-group' : 'form-group'}`}>
      <input
        {...input}
        type="text"
        className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
      />
      {label === 'Product weight' ? <UpdateWeightButton /> : null}
      {label === 'Condition' ? <ConditionDropdown /> : null}
      <div className="invalid-feedback">{meta.touched ? meta.error : ''}</div>
    </div>
  </div>
);
