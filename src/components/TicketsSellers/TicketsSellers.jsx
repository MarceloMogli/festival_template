import React from 'react';
import SellerContainer from '../SellersContainer/SellersContainer';
import { localSellers, foreignSellers } from '../../constants'
import './TicketsSellers.styles.css';

const TicketsSellers = () => {

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
