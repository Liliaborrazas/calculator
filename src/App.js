import React, { useState } from 'react';
import './App.css';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers'
import Result from './components/Result'

const App =()=> {
  const [stack, setStack ] = useState("")
  return (
    <div className="App">
      <header >
        <main className="react-calculator">Calculadora App
          <Result value={stack}/>
            <Numbers onClickNumber={number=>{console.log(`hice click en el : ${number}`)
          setStack(`${stack}${number}`)
          }}/>
            <Functions 
              onContentClear={clear=>{
                  console.log(`clear :${clear}`)
                  setStack("")
              }}
             onDelete={del=>{
                if(stack.length > 0){ 
                    const newStack = stack.substring(0, stack.length -1)
                    console.log(`Delete:${newStack}`)
                    setStack(newStack)
                } 
             }}/>
            <MathOperations 
            onClickOperations={operations =>{console.log(`Soy el parametro o sea el texto del btn q haces click soy: ${operations}`)
            setStack(`${stack}${operations}`)
          }}
            onClickEqual={equal =>{console.log(`Soy el paramentro equal definido en MathOpertion si haces click te pintara:${equal}`)
            setStack(eval(stack))
          }}
            />
            </main>
      </header>
    </div>
  );
}

export default App;
