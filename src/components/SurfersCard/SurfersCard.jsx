import React from 'react'

import './SurfersCard.styles.css'

const SurfersCard = ({ name, age, country, imageUrl, description }) => {   
    return (
      <div className="surfer-card">
        <img className="card-image" src={imageUrl} alt={name} />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-details">Age: {age}</p>
          <div className="flag-container">
            <img className="flag-image" src={country} alt={name} />
          </div>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };

export default SurfersCard