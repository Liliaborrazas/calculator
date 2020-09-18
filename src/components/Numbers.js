import React from 'react';
import Button from './button/Button';

const Numbers = ({onClickNumbers}) => {
    return(
        <div className="numbers">
        <Button text={1} handleClick={onClickNumbers}/>
        <Button text={2} handleClick={onClickNumbers}/>
        <Button text={3} handleClick={onClickNumbers}/>
        <Button text={4} handleClick={onClickNumbers}/>
        <Button text={5} handleClick={onClickNumbers}/>
        <Button text={6} handleClick={onClickNumbers}/>
        <Button text={7} handleClick={onClickNumbers}/>
        <Button text={8} handleClick={onClickNumbers}/>
        <Button text={9} handleClick={onClickNumbers}/>
        <Button text={0} handleClick={onClickNumbers}/>
     </div>
    )
}
export default Numbers;