import React from 'react';
import Button from './Button';


const MathOperations = ({onClickOperations, onClickEqual}) => {
    return(
        <section className="math-operations">
           <Button text="+" handleClick={onClickOperations}/>
           <Button text="-" handleClick={onClickOperations}/>
           <Button text="*" handleClick={onClickOperations}/>
           <Button text="/" handleClick={onClickOperations}/>
           <Button text="=" handleClick={onClickEqual}/> 

        </section>
       
    )
}

export default MathOperations;