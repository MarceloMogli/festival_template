import React from 'react'
import Chef1 from '../../assets/chef1.jpg'
import PastaImg from '../../assets/pasta.png'
import './ChefsCard.styles.css'

const ChefsCard = () => {
    return (
        <div className="card">
            <div className="card-face card-front">
            <div className="card-image">
            <img src={Chef1} alt="Chef Name"/>
            <div className="chef-name-overlay">
                <h2>Chef Alessandro Rossi</h2>
            </div>
        </div>
            </div>
            <div className="card-face card-back">
    <div className="food-icon">
        <img src={PastaImg} alt="Food Type Icon"/>
    </div>
    <div className="chef-description">
        <p>Renowned for their expertise in <strong>Italian cuisine</strong>, Chef [Name] brings a wealth of culinary experience to the table. Their dedication to crafting authentic dishes using fresh, high-quality ingredients has earned them international acclaim.</p>
    </div>
</div>

        </div>
    )
}

export default ChefsCard