import React from 'react';

const Button = (props) => {
    const { handleClick, label } = props;
    return (
        <button className="btn btn-danger" type="button" onClick={(e)=> handleClick(e)}>
        {label}
        </button>
    );  
};

export default Button;