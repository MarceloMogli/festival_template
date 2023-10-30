import React from 'react'
import './Gallery.styles.css'
import Img1 from '../../assets/1 (2).jpg'
import Img2 from '../../assets/2 (2).jpg'
import Img3 from '../../assets/3 (2).jpg'
import Img4 from '../../assets/4 (2).jpg'
import Img5 from '../../assets/5 (2).jpg'
import Img6 from '../../assets/6 (2).jpg'
import Img7 from '../../assets/7 (2).jpg'
import Img8 from '../../assets/8 (2).jpg'

const Gallery = () => {
  return (
    <div className="box">
      <span style={{'--i': 1}}><img src={Img1} alt="" /></span>
      <span style={{'--i': 2}}><img src={Img2} alt="" /></span>
      <span style={{'--i': 3}}><img src={Img3} alt="" /></span>
      <span style={{'--i': 4}}><img src={Img4} alt="" /></span>
      <span style={{'--i': 5}}><img src={Img5} alt="" /></span>
      <span style={{'--i': 6}}><img src={Img6} alt="" /></span>
      <span style={{'--i': 7}}><img src={Img7} alt="" /></span>
      <span style={{'--i': 8}}><img src={Img8} alt="" /></span>
    </div>
  )
}

export default Gallery