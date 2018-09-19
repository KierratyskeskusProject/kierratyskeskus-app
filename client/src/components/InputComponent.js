import React from 'react'

export default InputComponent {input, label} => {
    return (
        <div class="input">
            <label>{label}</label>
            <input {...input} type="text" style={{marginBottom: "20px"}}/>
        </div>
    );
};