import React from 'react';

const Button = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            {label}
        </button>
    );
};

export default Button;
