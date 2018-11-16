import React, { Component } from 'react';
import StarRating from 'react-star-ratings';
import UpdateWeightButton from './UpdateWeightButton';

class InputComponent extends Component {
  render() {
    const {
      input,
      label,
      meta,
      changeConditionRating,
      conditionRating,
      actualValue,
    } = this.props;

    return (
      <div>
        {<label>{label}</label>}
        <div className={`${input.name === 'weight'
          ? 'input-group'
          : 'form-group'}`}
        >

          {label === 'Condition'
            ? (
              <StarRating
                rating={conditionRating}
                numberOfStars={3}
                changeRating={changeConditionRating}
              />
            ) : (
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
            )}
          {input.name === 'weight' ? <UpdateWeightButton /> : null}
          <div className="invalid-feedback">{meta.touched ? meta.error : ''}</div>
        </div>

      </div>);
  }
}

export default InputComponent;
