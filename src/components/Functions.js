import React from 'react';
import Button from './Button';

const Functions = ({onContentClear, onDelete}) => {
    return(
    <div className="functions">
        <Button text={"Clear"} handleClick={onContentClear}/>
        <Button text={"r"} handleClick={onDelete}/>
    </div>
    )
}

export default Functions;