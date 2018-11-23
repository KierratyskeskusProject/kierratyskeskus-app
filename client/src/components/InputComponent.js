import React from 'react';
import StarRating from 'react-star-ratings';
import UpdateWeightButton from './UpdateWeightButton';
import CategoryReactSelect from './CategoryReactSelect';

// Responsible for rendering right fields for the form and adding them to redux-form
// This component also renders errors for the fields if there are any errors in the error object

const InputComponent = ({
  input,
  label,
  inputClass,
  meta,
  changeConditionRating,
  conditionRating,
  actualValue,
}) => (
  <div className="row">
    <label className="col-3">{label}</label>
    <div
      className={`${input.name === 'weight' ? 'input-group' : 'form-group'} ${inputClass}`}
    >

      {label !== 'Description' && label !== 'Category' && label !== 'Condition'
        ? (
          <input
            {...input}
            type="text"
            className={`form-control ${meta.touched && meta.error
              ? 'is-invalid'
              : ''}`}
            value={input.name === 'weight'
              ? actualValue
              : undefined}
          />
        )
        : null}
      {label === 'Condition'
        ? (
          <StarRating
            rating={conditionRating}
            numberOfStars={3}
            starRatedColor="green"
            starHoverColor="green"
            changeRating={changeConditionRating}
          />
        ) : null}
      {label === 'Description'
        ? (
          <textarea
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            rows="5"
            {...input}
          />
        )
        : null}
      {input.name === 'weight'
        ? <UpdateWeightButton />
        : null}
      {label === 'Category'
        ? <CategoryReactSelect />
        : null}
      <div
        className="invalid-feedback"
      >
        {meta.touched ? meta.error : ''}
      </div>
    </div>
  </div>
);

export default InputComponent;
