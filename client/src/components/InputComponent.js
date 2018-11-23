import React from 'react';
import StarRating from 'react-star-ratings';
import UpdateWeightButton from './UpdateWeightButton';
import CategoryReactSelect from './CategoryReactSelect';

// Responsible for rendering right fields for the form and adding them to redux-form
// This component also renders errors for the fields if there are any errors in the error object

const InputComponent = ({
  input, label, meta, changeConditionRating, conditionRating, actualValue,
}) => (
  <div>
    <label>{label}</label>
    <div className={`${input.name === 'weight' ? 'input-group' : 'form-group'}`}>
      {}

    </div>
  </div>
);

export default InputComponent;
