import React from 'react'

import './ChefsCard.styles.css'

const ChefsCard = ({name, imageProfile, description, imageType}) => {
    return (
        <div className="card">
            <div className="card-face card-front">
            <div className="card-image">
            <img src={imageProfile} alt="Chef Name"/>
            <div className="chef-name-overlay">
                <h2>Chef {name}</h2>
            </div>
        </div>
            </div>
            <div className="card-face card-back">
    <div className="food-icon">
        <img src={imageType} alt="Food Type Icon"/>
    </div>
    <div className="chef-description">
        <p>{description}</p>
    </div>
</div>

        </div>
    )
}

export default ChefsCard