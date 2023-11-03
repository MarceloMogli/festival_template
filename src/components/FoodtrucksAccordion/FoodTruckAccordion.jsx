import React from 'react'
import { useState } from 'react'

import image1 from '../../assets/foodtruck1.jpg'
import image2 from '../../assets/foodtruck2.jpg'
import image3 from '../../assets/foodtruck3.jpg'
import image4 from '../../assets/foodtruck4.jpg'
import image5 from '../../assets/foodtruck5.jpg'
import imageSearch from '../../assets/search.png'


import './FoodTruckAccordion.styles.css'

const cards = [
    {
        header: "Sweet Sensations Scoop Truck",
        image: image1,
        text: `Decadent desserts and ice cream. Dive into the Double Chocolate Fudge Sundae.`,
    },
    {
        header: "Taco Town Express",
        image: image2,
        text: `Authentic Mexican street tacos. Savor Al Pastor Tacos with Pineapple Salsa.`,
    },
    {
        header: "Burger Bliss Bistro",
        image: image3,
        text: `Artisanal burgers and loaded fries. Relish The Ultimate BBQ Bacon Burger.`,
    },
    {
        header: "Sushi Street Fusion",
        image: image4,
        text: `Creative sushi rolls. Must-try: Dragon Roll Tacos with a Japanese twist.`,
    },
    {
        header: "Gourmet Grub Hub",
        image: image5,
        text: `Upscale comfort food. Try the Truffle Mac 'n' Cheese for a taste of luxury.`,
    },
];


const FoodTruckAccordion = () => {
    const [active, setActive] = useState(0);

    const handleToggle = (index) => setActive(index);
    return (
        <section>
            {cards.map((card, index) => {
                const isActive = active === index ? "active" : "";
                return (
                    <article
                        key={card.image}
                        className={isActive}
                        onClick={() => handleToggle(index)}
                    >
                        <img src={card.image} alt={card.text} className="main-image" />
                        <div className="content">
                            <a href="/"><span className="material-symbols-outlined"><img src={imageSearch}  alt="Search icon" /></span></a>
                            <div>
                                <h2>{card.header}</h2>
                                <p>{card.text}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default FoodTruckAccordion