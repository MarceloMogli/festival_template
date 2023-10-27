import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#artists">Artists</a></li>
                <li><a href="#food">Food</a></li>
                <li><a href="#surfing">Surfing</a></li>
                <li><a href="#tickets">Tickets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar