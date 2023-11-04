import React from 'react'
import SurfHeader from '../../assets/surfingheader.jpg'

import './SurfingHeader.styles.css'

const SurfingHeader = () => {
    return (
        <div className="surfing-header-container">
            <div className="surfing-img">
                <img src={SurfHeader} alt="" />
            </div>
            <div className="surfing-intro">
                <h1>Surfing At Our Festival</h1>
                <p>Join us for a unique celebration of the surf culture at our festival. Our surf component is all about expression, community, and the thrill of riding the waves. Whether you're a seasoned surfer or a newcomer to the sport, there's something for everyone.</p>
                <p>Experience the freedom of the ocean, connect with surfers from around the world, and ride the waves to the rhythm of live music and good vibes.</p>
                <p>Our expression sessions, where creativity takes center stage, are not contests but celebrations of individual style and artistry on the water. It's a chance to break free from the routine and express your passion for surfing in a welcoming and supportive environment.</p>
                <p>Explore the beauty of surfboard art, watch stunning surf sessions, and be part of the global surf community at our festival. Get ready for an unforgettable experience filled with the stoke of surfing and the camaraderie of like-minded wave riders.</p>
                {/*<a href="/schedule">View Surfing Schedule</a>*/}
            </div>
        </div>
    )
}

export default SurfingHeader