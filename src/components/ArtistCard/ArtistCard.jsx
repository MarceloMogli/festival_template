import React from 'react'
import Img1 from '../../assets/6 (2).jpg'
import './ArtistCard.styles.css'

const ArtistCard = () => {
  return (
    <div className="artist-card">
                <div className="artist-image">
                    <img src={Img1} alt="Artist 1" />
                </div>
                <div className="artist-details">
                    <p className="artist-name">Artist 1</p>
                    <p className="artist-genre">Pop</p>
                    <p className="artist-origin">From: UK</p>
                </div>
            </div>
  )
}

export default ArtistCard