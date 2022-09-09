import React from 'react';
import { useState } from 'react';
import './Counter.scss';
import TickerButton from '../TickerButton/TickerButton'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter +1);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return(
    <div className='Counter'>
        <h3 className='Counter_items'>Counter</h3>
        <p className='Counter_items'>{counter}</p>
        <div className='buttonBox'>
          <TickerButton buttonStyle ="red" buttonText ="-" clickEvent={handleDecrement}/>
          <TickerButton buttonStyle ="green" buttonText ="+" clickEvent={handleIncrement}/> 
        </div>
    </div>
  )
}

export default Counter;