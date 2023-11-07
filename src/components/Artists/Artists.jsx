import React from 'react'

import './Artists.styles.css'
import ArtistCard from '../ArtistCard/ArtistCard'
import { artistsCards } from '../../constants'

const ArtistsContainer = () => {
    
    return (
        <div className="artists-container">
            {artistsCards.map((card, index) => (<ArtistCard key={index} {...card} />))}
        </div>
    )
}

export default ArtistsContainer