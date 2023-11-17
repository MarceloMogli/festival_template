import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'

const FoodTruckDetails = ({ data }) => {
    if (!data) {
        // Handle the case when data is not available
        return <InfinitySpin width='200' color="#000000" />;
    }

    const { name, cuisine, location, menu } = data;

    return (
        <div>
            <h2>{name}</h2>
            <p>Cuisine: {cuisine}</p>
            <p>Location: {location}</p>

            <h3>Menu:</h3>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        {item.item} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodTruckDetails;
