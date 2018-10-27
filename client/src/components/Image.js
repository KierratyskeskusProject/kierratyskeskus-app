import React from 'react';

const Image = (props) => {
  console.log(props);
  const { src } = props;
  return (
    <div className="newImage">
      <img src={src} alt="Loading unsuccessful" className="image" />
    </div>
  );
};
export default Image;
