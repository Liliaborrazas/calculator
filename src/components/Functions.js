import React from 'react';
import Button from './button/Button';

const Functions = ({onContentClear, onDelete}) => {
    return(
    <div className="functions">
        <Button type={"button-long-text"} text={"Clear"} handleClick={onContentClear}/>
        <Button text="&larr;" handleClick={onDelete}/>
    </div>
    )
}

export default Functions;