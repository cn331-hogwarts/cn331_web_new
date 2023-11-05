import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards-title'>what you need to know!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='src/assets/images/Personality-Test-900x568.png'
              text='what is MBTI '
              path='https://www.16personalities.com/en'
            />
            <CardItem
              src='src/assets/images/astrology-horoscope-circle.webp'
              text='what is you zodiac sign'
              path='https://www.britannica.com/place/Leo-constellation'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;