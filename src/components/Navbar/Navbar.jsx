import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/artists">Artists</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/surfing">Surfing</Link></li>
          <li><Link to="/tickets">Tickets</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}

export default Navbar