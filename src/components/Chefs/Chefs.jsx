import React from 'react'
import ChefIcon from '../../assets/cheficon.png'

import './Chefs.styles.css'
import ChefsCard from '../ChefsCard/ChefsCard'
import { chefsInfo } from '../../constants'

const Chefs = () => {
    return (
        <div className='chefs'>
            <div className="chefs-title">
                <h1>Welcome Our Esteemed Guest Chefs</h1>
                <img src={ChefIcon} alt="" />
            </div>
            <div className="chefs-intro">
                <p>
                    Prepare for a culinary journey like no other
                    as we proudly introduce our lineup of
                    world-renowned guest chefs. These culinary
                    masters bring their passion, expertise, and
                    unique flavors to our workshops, offering you
                    the opportunity to learn from the very best
                    in the industry. Get ready to be inspired, learn
                    new techniques, and savor exquisite dishes
                    under their guidance. Join us in celebrating
                    the art of cooking with these exceptional
                    guest chefs who are here to share their knowledge
                    and creativity with you.
                </p>
            </div>
            <div className="chefs-card-container">
                {chefsInfo.map((chef, index) => (<ChefsCard  key={index} {...chef}/>))}
            </div>
        </div>
    )
}

export default Chefs