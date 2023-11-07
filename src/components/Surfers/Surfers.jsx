import React from 'react'
import { useState } from 'react';
import Img from '../../assets/4 (2).jpg'
import RightChevron from '../../assets/right-chevron.png'
import LeftChevron from '../../assets/left-chevron.png'
import SurfersCard from '../SurfersCard/SurfersCard';
import { SurferCards } from '../../constants';

import './Surfers.styles.css'


const Surfers = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    const currentCard = document.querySelector('.surfer-card');
    currentCard.classList.add('hide');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SurferCards.length);
      currentCard.classList.remove('hide');
    }, 500);
  };

  const prevCard = () => {
    const currentCard = document.querySelector('.surfer-card');
    currentCard.classList.add('hide');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + SurferCards.length) % SurferCards.length);
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
              name={SurferCards[currentIndex].name}
              age={SurferCards[currentIndex].age}
              country={SurferCards[currentIndex].country}
              imageUrl={SurferCards[currentIndex].imageUrl}
              description={SurferCards[currentIndex].description}
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
