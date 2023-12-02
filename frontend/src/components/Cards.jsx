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
              path='https://www.16personalities.com'
            />
            <CardItem
              src='src/assets/images/astrology-horoscope-circle.webp'
              text='what is you zodiac sign'
              path='https://www.britannica.com/place/Leo-constellation'
            />
            <CardItem
              src='src/assets/images/harry-potter-houses-as-signs-1568129236.png'
              text='houses at hogwarts'
              path='https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world'
            />

              <CardItem
              src='https://img.jagranjosh.com/images/2023/September/1392023/blood-type-personality-test.jpg'
              text='blood group'
              path='https://www.verywellmind.com/what-is-blood-type-personality-5191276'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;