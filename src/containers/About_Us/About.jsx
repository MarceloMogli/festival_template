import React from 'react'
import './About.styles.css'
import Gallery from '../../components/AboutGallery/Gallery'

const About = () => {
  return (
    <div className="container" id='about'>
      <h3 className='about-title'>About Us</h3>
      <p className='about-text'>Over the years, our event has seen remarkable growth and transformation. Each previous edition has been a unique journey, filled with memorable moments, incredible talent, and unforgettable experiences. We've celebrated the joy of music, the thrill of surfing, and the unifying power of the two coming together. As we look back at our past editions, we're excited to continue this tradition and make each year even more special. Join us on this exciting ride through time, as we create new memories and write the next chapter of our event's history.</p>
      <div className='about-container'>
        <div className="gallery-container">
          <Gallery />
        </div>   
      </div>
    </div>
  )
}

export default About