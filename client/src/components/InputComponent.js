import React, { Component } from 'react';
import StarRating from 'react-star-ratings';
import UpdateWeightButton from './UpdateWeightButton';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  changeRating = (newRating) => {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    const { input, label, meta } = this.props;
    const { rating } = this.state;

    return (
      <div>
        {<label>{label}</label>}
        <div className={`${label === 'Product weight'
          ? 'input-group'
          : 'form-group'}`}
        >

          {label === 'Condition'
            ? (
              <StarRating
                rating={rating}
                numberOfStars={3}
                changeRating={this.changeRating}
              />
            ) : (
              <input
                {...input}
                type="text"
                className={`form-control ${meta.touched && meta.error
                  ? 'is-invalid'
                  : ''}`}
              />
            )}
          {label === 'Product weight' ? <UpdateWeightButton /> : null}
          <div className="invalid-feedback">{meta.touched ? meta.error : ''}</div>
        </div>

      </div>);
  }
}

export default InputComponent;
