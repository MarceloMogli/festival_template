import React from 'react'
import Img1 from '../../assets/1 (2).jpg'
import Img2 from '../../assets/2 (2).jpg'
import Img3 from '../../assets/3 (2).jpg'
import Img4 from '../../assets/4 (2).jpg'
import Img5 from '../../assets/5 (2).jpg'

import './ArtistsGallery.styles.css'

const ArtistsGallery = () => {
  return (
    <div className="artists-gallery-container">
                <div className="artists-gallery">
                    <img className="item" src={Img1} alt="1" />
                    <img className="item" src={Img2} alt="2" />
                    <img className="item" src={Img3} alt="3" />
                    <img className="item" src={Img4} alt="4" />
                    <img className="item" src={Img5} alt="5" />
                </div>
            </div>
  )
}

export default ArtistsGallery