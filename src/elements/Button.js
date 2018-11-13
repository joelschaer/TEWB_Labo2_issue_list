import React from 'react';

const Button = ({ children, position, onClick}) => {
    return (
        <button onClick={onClick} type="submit" className={`btn btn-primary ${position}`}>
            {children}
        </button>
    )
}

export default Button;