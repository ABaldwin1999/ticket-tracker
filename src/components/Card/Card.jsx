import React from 'react';
import './Card.scss';
import Counter from '../Counter/Counter';

const Card = (props) => {
  const {myTeam} = props;
  const cardListJSX = myTeam.map((team, index) => (
    <div className='cards-content'>
      <h3 key={index} className='card_content'>Name: {team.name}</h3>
      <h3 key={index} className='card_content'>Role: {team.role}</h3>
      <Counter/>
    </div>
  ));
  return (
    <div className='cards'>
      {cardListJSX}
    </div>
  )
}

export default Card;