
import React from 'react';


const Button = ({ children, onClick, type }) => {

    return (
        <button type={type} onClick={onClick} className=
            ' bg-teal-900 text-white rounded-full hover:bg-white hover:text-teal-900 px-4 py-2' style={{ border: "solid 1px", borderColor: "rgba(251, 251, 251, 0.40)" }}>
            {children}
        </button>
    );
};

export default Button;
