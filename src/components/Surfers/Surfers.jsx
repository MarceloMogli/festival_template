import React from 'react'
import { useState } from 'react';
import Img from '../../assets/4 (2).jpg'
import Prt from '../../assets/portugal.jpg'
import RightChevron from '../../assets/right-chevron.png'
import LeftChevron from '../../assets/left-chevron.png'

import './Surfers.styles.css'
import SurfersCard from '../SurfersCard/SurfersCard';

const Surfers = () => {
  const cards = [
    {
      name: 'Surfer 1',
      age: 25,
      country: Prt,
      imageUrl: Img,
      description: 'An accomplished surfer known for conquering some of the most challenging waves around the world. With a remarkable ability to read the ocean, this surfer fearlessly tackles colossal waves. Their unwavering dedication and love for the sport shine through every wave they ride.'
    },
    {
      name: 'Surfer 2',
      age: 30,
      country: Prt,
      imageUrl: Img,
      description: 'An accomplished surfer known for conquering some of the most challenging waves around the world. With a remarkable ability to read the ocean, this surfer fearlessly tackles colossal waves. Their unwavering dedication and love for the sport shine through every wave they ride.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    const currentCard = document.querySelector('.surfer-card');
    currentCard.classList.add('hide');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      currentCard.classList.remove('hide');
    }, 500);
  };

  const prevCard = () => {
    const currentCard = document.querySelector('.surfer-card');
    currentCard.classList.add('hide');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      currentCard.classList.remove('hide');
    }, 500);
  };

  return (
    <div className="surfers-container">
      <div className="image-container">
        <img src={Img} alt="" />
      </div>
      <div className="content-container">
        <div className="content-title">
          <h1>Meet The Surfers</h1>
        </div>
        <div className="carousel-container">
          <div className="card-carousel">
            <button className="carousel-button" onClick={prevCard}>
              <img src={LeftChevron} alt="" />
            </button>
            <SurfersCard
              name={cards[currentIndex].name}
              age={cards[currentIndex].age}
              country={cards[currentIndex].country}
              imageUrl={cards[currentIndex].imageUrl}
              description={cards[currentIndex].description}
            />
            <button className="carousel-button" onClick={nextCard}>
              <img src={RightChevron} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surfers;
