import React from 'react'

import GalleryIcon from '../../assets/cooking.png'
import WorkShopGallery from '../WorkShopGallery/WorkShopGallery'

import './Workshop.styles.css'

const WorkShop = () => {
    return (
        <>
            <div className="workshops-title">
                <h1>Capturing Creative Workshops: A Visual Journey Through Inspiration and Innovation</h1>
                <img src={GalleryIcon} alt="" />
            </div>
            <div className="workshops-gallery-container">
                <WorkShopGallery />
            </div>
        </>
    )
}

export default WorkShop