import React, { Fragment } from 'react';
import StarRating from 'react-star-ratings';
import UpdateWeightButton from './UpdateWeightButton';
import CategoryReactSelect from './CategoryReactSelect';

// Responsible for rendering right fields for the form and adding them to redux-form
// This component also renders errors for the fields if there are any errors in the error object

const InputComponent = ({
  input,
  label,
  meta,
  changeConditionRating,
  conditionRating,
  actualValue,
}) => (
  <div>
    <label>{label}</label>
    <div className={`${input.name === 'weight' ? 'input-group' : 'form-group'}`}>
      {input.name === 'title' || input.name === 'price'
        ? (
          <input
            {...input}
            type="text"
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
          />
        ) : null}
      {input.name === 'condition'
        ? (
          <StarRating
            rating={conditionRating}
            numberOfStars={3}
            starRatedColor="green"
            starHoverColor="green"
            changeRating={changeConditionRating}
          />
        ) : null}
      {input.name === 'weight' ? (
        <Fragment>
          <input
            {...input}
            type="text"
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            value={input.name === 'weight' ? actualValue : undefined}
          />
          <UpdateWeightButton />
        </Fragment>
      ) : null}
      {input.name === 'description'
        ? (
          <textarea
            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            rows="5"
            {...input}
          />
        ) : null}
      {input.name === 'category' ? <CategoryReactSelect /> : null}
      <div className="invalid-feedback">
        {meta.touched ? meta.error : ''}
      </div>
    </div>
  </div>
);

export default InputComponent;
