import React from 'react'
import Logo from '../../assets/soundswell-high-resolution-logo-white-transparent.png'
import './Footer.styles.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Logo} alt="Footer Logo" />
                    <h2>SoundSwell Festival</h2>
                </div>
                <div className="footer-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/schedule">Schedule</a></li>
                    <li><a href="/artists">Artists</a></li>
                    <li><a href="/food">Food</a></li>
                    <li><a href="/surfing">Surfing</a></li>
                    <li><a href="/tickets">Tickets</a></li>
                </ul>
            </div>
                <div className="footer-contact">
                    <h3>Contact Information</h3>
                    <p>Email: contact@soundswell.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2023 SoundSwell Festival. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer