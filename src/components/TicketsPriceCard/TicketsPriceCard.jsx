import React from 'react'

import './TicketsPriceCard.styles.css'

const TicketsPriceCard = ({ ticketName, ticketDescription, priceRows }) => {
    return (
        <div className="ticket-price-container">
            <h2 className='ticket-name'>{ticketName}</h2>
            <div className='ticket-description'>
                {ticketDescription}
            </div>
            {priceRows.map((priceRow, index) => (
                <div className="price-row" key={index}>
                    <div className="date-limit">{priceRow.dateLimit}</div>
                    <div className="ticket-price">{priceRow.price}</div>
                </div>
            ))}
        </div>
    )
}

export default TicketsPriceCard