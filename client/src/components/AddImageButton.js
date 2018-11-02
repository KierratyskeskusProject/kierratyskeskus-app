import React from 'react';
import Webcam from 'react-webcam';

const ImageButton = (props) => {
  const { action } = props;
  return (
    <button className="btn addImage" type="button" onClick={action}>
      <div className="camera__container">
        <div className="camera__actual">
          <Webcam height="200" />
          <i className="fa fa-camera" aria-hidden="true" />
        </div>
      </div>
    </button>
  );
};
export default ImageButton;
