import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '1px solid #ccc'
            }}
        />
    );
};

export default Input;
