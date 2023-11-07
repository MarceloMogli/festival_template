import React from 'react';

import './SellersContainer.styles.css'

const SellerContainer = ({ seller }) => {
  return (
    <div className="seller-container">
      <a href={seller.website} target="_blank" rel="noopener noreferrer" className="seller-button">
        {seller.name}
      </a>
    </div>
  );
}

export default SellerContainer;