import React from 'react'
import Img1 from '../../assets/1 (2).jpg'
import Img2 from '../../assets/2 (2).jpg'
import Img3 from '../../assets/3 (2).jpg'
import Img4 from '../../assets/4 (2).jpg'
import Img5 from '../../assets/5 (2).jpg'
import Img6 from '../../assets/6 (2).jpg'
import './WorkShopGallery.styles.css'

const WorkShopGallery = () => {
  return (
    <div className="gallery">
          <div className="gallery-item item-1"><img src={Img1} alt="" /></div>
          <div className="gallery-item item-2"><img src={Img2} alt="" /></div>
          <div className="gallery-item item-3"><img src={Img3} alt="" /></div>
          <div className="gallery-item item-4"><img src={Img4} alt="" /></div>
          <div className="gallery-item item-5"><img src={Img5} alt="" /></div>
          <div className="gallery-item item-6"><img src={Img6} alt="" /></div>
        </div>
  )
}

export default WorkShopGallery