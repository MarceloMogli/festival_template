import React from 'react'

import Img2 from '../../assets/2 (2).jpg'
import './Schedule.styles.css'
import ScheduleCard from '../ScheduleCard/ScheduleCard'

const Schedule = () => {
  return (
    <div className="schedule-container">
        <ScheduleCard />

        <div className="event-card">
            <div className="event-image">
                <img src={Img2} alt="Event 2"/>
            </div>
            <div className="event-details">
                <p className="event-time">2:00 PM</p>
                <p className="event-date">November 11, 2023</p>
                <p className="event-name">Event 2</p>
                <p className="event-type">Workshop</p>
            </div>
        </div>
        </div>
  )
}

export default Schedule