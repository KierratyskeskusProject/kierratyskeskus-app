import React from 'react';

const onWeightSubmit = (event) => {
  console.log(event);
};

export default () => (
  <div className="input-group-append">
    <button className="btn btn-primary" type="button" onClick={onWeightSubmit}>
      Update Weight
    </button>
  </div>
);
