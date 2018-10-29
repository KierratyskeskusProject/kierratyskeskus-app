import React from 'react';

const DeleteButton = (props) => {
  const { action } = props;
  return (
    <button className="btn-deleteImage" type="button" onClick={action}>
      Delete
    </button>
  );
};
export default DeleteButton;
