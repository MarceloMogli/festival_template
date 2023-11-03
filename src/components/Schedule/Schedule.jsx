import React from 'react'

import './Schedule.styles.css'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader'

const Schedule = () => {
    return (
        <>
            <ScheduleHeader />
            <div className="schedule-container">
                <ScheduleCard />
                <ScheduleCard />
            </div>
        </>
    )
}

export default Schedule