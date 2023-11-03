import React from 'react'


import './ArtistsHeader.styles.css'
import ArtistsGallery from '../ArtistsGallery/ArtistsGallery'

const ArtistsHeader = () => {
    return (
        <div className="artists-header-container">
            <ArtistsGallery />
            <div className="artists-header-intro">
                <h1>Welcome to Our Artists</h1>
                <p>Discover a world of creativity and expression through the eyes of talented artists.</p>
                <ul>
                    <li>Explore a wide range of art styles and mediums.</li>
                    <li>Immerse yourself in thought-provoking and inspiring works of art.</li>
                    <li>Visit us today to experience the beauty of human expression.</li>
                </ul>
            </div>
        </div>
    )
}

export default ArtistsHeader