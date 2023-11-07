import React from 'react'

import './ScheduleCard.styles.css'

const ScheduleCard = ({image, name, date, time, type}) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image} alt="Event 1" />
      </div>
      <div className="event-details">
        <p className="event-name">{name}</p>
        <p className="event-date">{date}</p>
        <p className="event-time">{time}</p>
        <p className="event-type">{type}</p>
      </div>
    </div>
  )
}

export default ScheduleCard