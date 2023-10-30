import React from 'react'
import Logo from '../../assets/soundswell-high-resolution-logo-white-transparent.png'
import './Footer.styles.css'

const Footer = () => {
  return (
    <footer>
        <div class="footer-content">
            <div class="footer-logo">
                <img src={Logo} alt="Footer Logo" />
                <h2>SoundSwell Festival</h2>
            </div>
            <div class="footer-links">
                <ul>
                    <li><a href="./index.php">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <h3>Contact Information</h3>
                <p>Email: contact@soundswell.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2023 SoundSwell Festival. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer