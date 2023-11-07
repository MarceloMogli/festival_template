import React from 'react'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader'
import { scheduleInfo } from '../../constants'

import './Schedule.styles.css'

const Schedule = () => {
    return (
        <>
            <ScheduleHeader />
            <div className="schedule-container">
                {scheduleInfo.map((data, index) => (<ScheduleCard key={index} {...data} />))}
            </div>
        </>
    )
}

export default Schedule