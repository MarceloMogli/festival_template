import React from 'react';
import SellerContainer from '../SellersContainer/SellersContainer';

import './TicketsSellers.styles.css';

const TicketsSellers = () => {
    const localSellers = [
        {
            name: 'MEO BlueTicket',
            website: 'https://blueticket.meo.pt/',
        },
        {
            name: 'Fnac',
            website: 'https://www.fnac.com',
        },
        {
            name: 'Worten',
            website: 'https://www.worten.com',
        },
        {
            name: 'Fnac',
            website: 'https://www.fnac.com',
        },
    ];

    const foreignSellers = [
        {
            name: 'SeeTickets',
            website: 'https://www.seetickets.com',
        },
        {
            name: 'Másqueticket',
            website: 'https://www.masqueticket.com',
        },
    ];

    return (
        <>
            <h1 className='sellers-title'>Ticket Sellers</h1>
            <div className="tickets-sellers-container">
                <div className="seller-row-container">
                    <p className='local-sellers'>Only tickets purchased from official sales outlets are valid:</p>
                    {localSellers.map((seller, index) => (
                        <SellerContainer key={index} seller={seller} />
                    ))}
                </div>
                <div className="seller-row-container">
                    <p className='local-sellers'>Overseas ticket sellers:</p>
                    {foreignSellers.map((seller, index) => (
                        <SellerContainer key={index} seller={seller} />
                    ))}
                </div>

            </div>
        </>
    );
}

export default TicketsSellers;
