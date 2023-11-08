import React from 'react';
import ScheduleImg from '../../assets/scheduleheader.jpg'

import './ScheduleHeader.styles.css'

const ScheduleHeader = () => {
  return (
    <div className="schedule-header-container">
      <div className="schedule-header-image">
        <img src={ScheduleImg} alt="Event Schedule" />
      </div>
      <div className="schedule-header-content">
        <h1>See what we <span>have to offer</span></h1>
      </div>
    </div>
  );
};

export default ScheduleHeader;
