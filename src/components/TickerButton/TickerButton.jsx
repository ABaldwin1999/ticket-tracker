import React from 'react';
import './TickerButton.scss';

const TickerButton = (props) => {
  const {increment, buttonStyle} = props;
  return (<button className={buttonStyle}>{increment}</button>)
}

export default TickerButton;