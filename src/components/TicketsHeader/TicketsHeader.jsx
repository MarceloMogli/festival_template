import React from 'react'
import TicketsImg from '../../assets/7 (2).jpg'

import './TicketsHeader.styles.css'

const TicketsHeader = () => {
  return (
    <div className="tickets-header-container">
      <div className="header-image">
        <img src={TicketsImg} alt="Event Schedule" />
      </div>
      <div className="header-content">
        <h1>Unlock <span>Your Tickets</span> here</h1>
      </div>
    </div>
  )
}

export default TicketsHeader