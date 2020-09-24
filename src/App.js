//Con esta linea le decimos al eslint que nos saque el error de la consola
/*eslint no-eval:0 */
import React, { useState } from 'react';
import words from 'lodash.words';
import './App.css';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers'
import Result from './components/Result'

const App =()=> {
  const [stack, setStack ] = useState("")

  //Nos importamos esta funcion de la ibreria lodash para que no me muetre los caracteres - + etc
  //lo guardamos en una variable y en el componente result, donde mostramos el valor le pasamos items para 
  //que nos muestre el ultimo numero
  const items = words(stack, /[^-^+^*^/]+/g)

  
  const value = items.length > 0 ? items[items.length-1] :"0";
  console.log(`valor retornado con value es: ${value}`)
  return (
    <div className="App">
      <header >
        <main className="react-calculator">Calculadora App
          <Result value={value}/>
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
