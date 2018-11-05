import React from 'react';

const onWeightSubmit = (event) => {
  console.log(event);
};

export default () => (
  <div className="input-group-append">
    <button className="btn btn-primary" id="weight" type="button" onClick={onWeightSubmit}>
      <span><i className="fa fa-sync-alt" aria-hidden="true" /></span>
    </button>
  </div>
);
