import React from 'react'
import { ImageDesktop } from '../assets'
import { News } from './index'

function Hero() {
  return (
    <div className='hero-section'>
      <div className='img-container'>
      <img src={ImageDesktop} alt="image-desktop" />
      <div className='description'>
        <h1>The Bright Future of Web 3.0?</h1>
        <div className='description-second-div'>
          <p>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
          </p>
          <button className='button-hero-section'>
            Read More
          </button>
        </div>
      </div>
      </div>

      <News />
    </div>
  )
}

export default Hero