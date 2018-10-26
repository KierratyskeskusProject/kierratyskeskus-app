import React from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../redux/actions';

const Button = (props) => {
  const { handleClick, label } = props;
  console.log(props);
  return (
    <button className="button" type="button" onClick={() => handleClick()}>
      {label}
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  handleClick: () => (
    dispatch(deleteImage())
  ),
});

export default connect(null, mapDispatchToProps)(Button);
