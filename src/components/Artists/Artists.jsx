import React from 'react'

import Img2 from '../../assets/5 (2).jpg'
import './Artists.styles.css'
import ArtistCard from '../ArtistCard/ArtistCard'

const ArtistsContainer = () => {
    return (
        <div className="artists-container">
            <ArtistCard />

            <div className="artist-card">
                <div className="artist-image">
                    <img src={Img2} alt="Artist 2" />
                </div>
                <div className="artist-details">
                    <p className="artist-name">Artist 2</p>
                    <p className="artist-genre">Rock</p>
                    <p className="artist-origin">From: Portugal</p>
                </div>
            </div>
        </div>
    )
}

export default ArtistsContainer