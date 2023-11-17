import React from 'react'
import Logo from '../../assets/soundswell-high-resolution-logo-white-transparent.png'
import { Link } from 'react-router-dom'
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/artists">Artists</Link></li>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/surfing">Surfing</Link></li>
                    <li><Link to="/tickets">Tickets</Link></li>
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