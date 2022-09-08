import React from 'react';
import './Counter.scss';
import TickerButton from '../TickerButton/TickerButton'

const Counter = () => {
  return (
    <div className='Counter'>
        <h3 className='Counter_items'>Counter</h3>
        <p className='Counter_items'>0</p>
        <div className='buttonBox'>
          <TickerButton buttonStyle ="green" increment ="+"/>
          <TickerButton buttonStyle ="red" increment ="-"/>
        </div>
    </div>
  )
}

export default Counter;