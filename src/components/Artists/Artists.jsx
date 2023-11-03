import React from 'react'

import './Artists.styles.css'
import ArtistCard from '../ArtistCard/ArtistCard'

const ArtistsContainer = () => {
    return (
        <div className="artists-container">
            <ArtistCard />
            <ArtistCard />
        </div>
    )
}

export default ArtistsContainer