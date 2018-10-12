import React from 'react';

const Image = (props) => {
  const { src } = props;
  console.log('Toimiiko tämäkin?');
  return (
    <div className="newImage">
      <img src={src} alt="Loading unsuccessful" className="image" />
    </div>
  );
};
export default Image;
