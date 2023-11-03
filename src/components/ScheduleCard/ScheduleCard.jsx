import React from 'react'
import Img1 from '../../assets/1 (2).jpg'
import './ScheduleCard.styles.css'

const ScheduleCard = () => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={Img1} alt="Event 1" />
      </div>
      <div className="event-details">
        <p className="event-name">Event 1</p>
        <p className="event-date">November 10, 2023</p>
        <p className="event-time">10:00 AM - 16:00 PM</p>
        <p className="event-type">Concert</p>
      </div>
    </div>
  )
}

export default ScheduleCard