import React from 'react'

import './ArtistCard.styles.css'

const ArtistCard = ({image, name, genre, origin}) => {
  return (
    <div className="artist-card">
                <div className="artist-image">
                    <img src={image} alt="Artist 1" />
                </div>
                <div className="artist-details">
                    <p className="artist-name">{name}</p>
                    <p className="artist-genre">{genre}</p>
                    <p className="artist-origin">From: {origin}</p>
                </div>
            </div>
  )
}

export default ArtistCard