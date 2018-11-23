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
      {(() => {
        switch (true) {
          case input.name === 'condition': {
            return (
              <StarRating
                rating={conditionRating}
                numberOfStars={3}
                starRatedColor="green"
                starHoverColor="green"
                changeRating={changeConditionRating}
              />
            ); }
          case input.name === 'category': {
            return <CategoryReactSelect />;
          }
          case input.name === 'weight': {
            return (
              <React.Fragment>
                <input
                  {...input}
                  type="text"
                  className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                  value={input.name === 'weight' ? actualValue : undefined}
                />
                <UpdateWeightButton />
              </React.Fragment>
            ); }
          case input.name === 'description': {
            return (
              <textarea
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                rows="5"
                {...input}
              />
            ); }
          default: {
            return (
              <input
                {...input}
                type="text"
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
              />
            ); }
        }
      }
      )()}
    </div>
  </div>
);

export default InputComponent;
