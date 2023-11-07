import React from 'react'

import './TicketsInfo.styles.css'

const TicketsInfo = () => {
    return (
        <div className="tickets-info-container">
            <p className="tickets-info-title">Minimum Age</p>
            <p className="tickets-info-text">
                Entry for children under 6 years old is prohibited. Tickets are required for those aged 6 and above, and they must be accompanied by an adult ticket holder. No refunds will be granted in case of booking errors.
            </p>

            <p className="tickets-info-schedule">Ticket Booth Opening Hours at the Festival</p>
            <p className="tickets-info-schedule-item">June 29: 10:00 AM – 11:00 PM</p>
            <p className="tickets-info-schedule-item">June 30 and July 1: 10:00 AM – 01:30 AM</p>

            <p className="tickets-info-schedule">Ticket Exchange for Wristbands at the Festival</p>
            <p className="tickets-info-schedule-item">June 29: 10:00 AM – 11:00 PM</p>
            <p className="tickets-info-schedule-item">June 30 and July 1: 10:00 AM – 01:30 AM</p>
        </div>
    )
}

export default TicketsInfo