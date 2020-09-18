import React from 'react';
import './App.css';
import Button from './components/Button';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result'

const App =()=> {
  return (
    <div className="App">
      <header >
        <main className="react-calculator">Calculadora App
          <Result value={0}/>
            <div className="numbers">
               <Button text={1} handleClick={ text=>{
                  console.log(`estoy dentro del handle ${text}`)
               }}/>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <Functions 
             onContentClear={clear=>{console.log(`clear :${clear}`)}}
             onDelete={del=>{console.log(`Delete:${del}`)}}/>
            <MathOperations 
            onClickOperations={operations =>console.log(`Soy el parametro o sea el texto del btn q haces click soy: ${operations}`)}
            onClickEqual={equal =>console.log(`Soy el paramentro equal definido en MathOpertion si haces click te pintara:${equal}`)}
            
            />
            </main>
      </header>
    </div>
  );
}

export default App;
