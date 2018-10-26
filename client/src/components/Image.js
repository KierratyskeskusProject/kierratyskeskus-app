import React from 'react';
import Button from './Button';

const Image = (props) => {
  const { src } = props;
  return (
    <div className="newImage">
      <img src={src} alt="Loading unsuccessful" className="image" />
      <div className="button">
        <Button label="delete" />
      </div>
    </div>
  );
};


export default Image;
