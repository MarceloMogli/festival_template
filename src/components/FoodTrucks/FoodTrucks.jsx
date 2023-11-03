import React from 'react'

import './FoodTrucks.styles.css'
import FoodTruckAccordion from '../FoodtrucksAccordion/FoodTruckAccordion'
import TitleIcon from '../../assets/food-icon1.png'
import GalleryIcon from '../../assets/cooking.png'
import WorkShopGallery from '../WorkShopGallery/WorkShopGallery'

const FoodTrucks = () => {
  return (
    <div className="foodtrucks">
      <div className="foodtrucks-title">
        <h1>Discover a World of Flavor: Our Food Trucks Await!</h1>
        <img src={TitleIcon} alt="" />
      </div>
      <div className="foodtrucks-intro">
        <p>Explore a diverse culinary world with five unique food trucks.
          Indulge in gourmet comfort food, savor authentic Mexican tacos,
          relish artisanal burgers, discover creative sushi,
          and treat your sweet tooth to decadent desserts. Your taste
          buds are in for a delightful adventure!
        </p>
      </div>
      <div className="foodtruck-accordion-container">
        <FoodTruckAccordion />
      </div>
      <div className="foodtrucks-title">
        <h1>Capturing Creative Workshops: A Visual Journey Through Inspiration and Innovation</h1>
        <img src={GalleryIcon} alt="" />
      </div>
      <div className="workshop-container">
        <WorkShopGallery/>
      </div>
    </div>
  )
}

export default FoodTrucks