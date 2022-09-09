import React from 'react';
import './TickerButton.scss';

const TickerButton = (props) => {
  const {buttonText, buttonStyle, clickEvent} = props;
  return (<button className={buttonStyle} onClick={clickEvent}>{buttonText}</button>)
}

export default TickerButton;