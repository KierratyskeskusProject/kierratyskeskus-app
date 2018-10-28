import React from 'react';

const DeleteButton = (props) => {
  const { action } = props;
  console.log('delete button componet', props);
  return (
    <button className="btn-deleteImage" type="button" onClick={action} />
  );
};
export default DeleteButton;
