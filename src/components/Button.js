import React from 'react';

const Button = ({text, type, handleClick}) =>(
    <button 
        className={type}
        onClick= {()=>handleClick(text)}
    >
        <span>{text}</span>
        
    </button>
    )

export default Button;