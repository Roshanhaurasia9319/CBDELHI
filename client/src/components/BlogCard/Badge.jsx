// Badge.js
import React from "react";

const Badge = ({ label }) => {
    return (
        <span style={{
            backgroundColor: '#ff5722',
            color: 'white',
            padding: '0.3rem 0.7rem',
            borderRadius: '12px',
            marginRight: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: '500',
            display: 'inline-block'
        }}>
            {label}
        </span>
    );
};

export default Badge;
