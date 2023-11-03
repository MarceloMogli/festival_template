import React from 'react'
import FoodHeaderImg from '../../assets/foodheader.jpg'
import './FoodHeader.styles.css'

const FoodHeader = () => {
  return (
    <div className='foodheader-container'>
    <div className="foodheader-banner">
        <img src={FoodHeaderImg} alt="Food Header" />
        <div className="foodheader-tagline">
        Feast on Knowledge <span>& Culinary Delights: Workshops, Food Trucks</span> & Renowned Guest Chefs Await!
        </div>
    </div>
</div>

  )
}

export default FoodHeader