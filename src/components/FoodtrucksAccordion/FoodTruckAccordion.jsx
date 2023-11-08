import React from 'react'
import { useState } from 'react'
import { foodtruckCards } from '../../constants'
import imageSearch from '../../assets/search.png'

import './FoodTruckAccordion.styles.css'




const FoodTruckAccordion = () => {
    const [active, setActive] = useState(0);

    const handleToggle = (index) => setActive(index);
    return (
        <section>
            {foodtruckCards.map((foodtruckCard, index) => {
                const isActive = active === index ? "active" : "";
                return (
                    <article
                        key={foodtruckCard.image}
                        className={isActive}
                        onClick={() => handleToggle(index)}
                    >
                        <img src={foodtruckCard.image} alt={foodtruckCard.text} className="main-image" />
                        <div className="content">
                            <a href={`/foodtruck${index}`}>
                                <span className="material-symbols-outlined">
                                    <img src={imageSearch} alt="Search icon" />
                                </span>
                            </a>
                            <div>
                                <h2>{foodtruckCard.header}</h2>
                                <p>{foodtruckCard.text}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default FoodTruckAccordion