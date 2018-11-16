import React, { Component } from 'react';
import StarRating from 'react-star-ratings';

class Rating extends Component {
  render() {
    return (
      <StarRating
        rating={5}
        numberOfStars={3}
      />
    );
  }
}

export default Rating;
