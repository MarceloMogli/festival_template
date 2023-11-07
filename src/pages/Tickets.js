import React from 'react'
import TicketsHeader from '../components/TicketsHeader/TicketsHeader'
import TicketsPriceSheet from '../components/TicketsPriceSheet/TicketsPriceSheet'
import Footer from '../components/Footer/Footer'
import TicketsSellers from '../components/TicketsSellers/TicketsSellers'
import TicketsInfo from '../components/TicketsInfo/TicketsInfo'

const Tickets = () => {
  return (
    <>
    <TicketsHeader />
    <TicketsPriceSheet />
    <TicketsSellers />
    <TicketsInfo />
    <Footer />
    </>
  )
}

export default Tickets