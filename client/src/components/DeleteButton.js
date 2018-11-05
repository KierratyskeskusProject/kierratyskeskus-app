import React from 'react';

const DeleteButton = (props) => {
  const { action } = props;
  return (
    <button className="btn deleteImage" type="button" onClick={action}>
      <i className="fa fa-trash-alt" />
    </button>
  );
};
export default DeleteButton;
