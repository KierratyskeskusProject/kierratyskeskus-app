import React from 'react';

const ImageButton = (props) => {
  const { action } = props;
  return (
    <button className="btn addImage" type="button" onClick={action}>
      <i className="fa fa-camera" aria-hidden="true" />
    </button>
  );
};
export default ImageButton;
