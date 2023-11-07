import React from 'react'

import './TicketsPriceSheet.styles.css'
import TicketsPriceCard from '../TicketsPriceCard/TicketsPriceCard'
import { ticketTypes } from '../../constants'

const TicketsPriceSheet = () => {

    return (
        <>
            <h1 className='price-title'>Pricing</h1>
            <div className="price-sheet-container">

                {ticketTypes.map((ticket, index) => (
                    <TicketsPriceCard key={index} {...ticket} />
                ))}


            </div></>

    )
}

export default TicketsPriceSheet