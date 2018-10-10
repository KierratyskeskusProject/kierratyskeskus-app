import React from 'react';

const onWeightSubmit = (event) => {
  console.log(event);
};

export default () => (
  <div>
    <button type="button" onClick={onWeightSubmit}>
      Update Weight
    </button>
  </div>
);
