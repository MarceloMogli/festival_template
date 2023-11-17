import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodTruckDetails from '../components/FoodtruckDetails/FoodtruckDetail';
import { foodTrucksData } from '../constants';

const FoodTruckTemplate = () => {
  const { id } = useParams();
  const [foodTruckData, setFoodTruckData] = useState(null);

  useEffect(() => {
    // Find the food truck data based on the id parameter
    const selectedFoodTruck = foodTrucksData.find(truck => truck.id === parseInt(id, 10));
    console.log(selectedFoodTruck)
    setFoodTruckData(selectedFoodTruck);
  }, [id]);

  return (
    <div>
      {foodTruckData ? (
        <FoodTruckDetails data={foodTruckData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodTruckTemplate;
