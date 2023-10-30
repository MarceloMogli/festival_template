import React from 'react'
import HeaderImage from '../../assets/header.jpg'
import Logo from '../../assets/soundswell-high-resolution-logo-transparent.png'
import './header.styles.css'

const Header = () => {
  return (
    <div className='header-container' id='home'>
      <div className="img-header-container">
        <img src={HeaderImage} alt="" />
        <p>The Sound of the Waves, The Rhythm of Music!</p>
      </div>
      <div className="header-text-container">
        <div className="header-title">
          <img src={Logo} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Header