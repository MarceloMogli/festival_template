import React from 'react'
import FoodHeader from '../components/FoodHeader/FoodHeader'
import FoodTrucks from '../components/FoodTrucks/FoodTrucks'
import Footer from "../components/Footer/Footer";
import WorkShop from '../components/WorkShop/WorkShop';
import Chefs from '../components/Chefs/Chefs';


const Food = () => {
  return (
    <>
    <FoodHeader/>
    <FoodTrucks />
    <WorkShop />
    <Chefs />
    <Footer/>
    </>
  )
}

export default Food