import React from 'react';
import './Button.css'

const Button = ({text, type, handleClick}) =>(
    <button 
        className={type}
        onClick= {()=>handleClick(text)}
    >
        <span>{text}</span>
        
    </button>
    )

export default Button;