import React from 'react';
import Button from './button/Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button
             key={number} 
             text={number.toString()} 
             handleClick={onClickNumber}
        />
    )
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => {
    return(
        <div className="numbers">
       {renderButtons(onClickNumber)}
     </div>
    )
}
export default Numbers;