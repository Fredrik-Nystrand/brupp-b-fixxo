import React from 'react'
import InstagramCard from '../InstagramCard/InstagramCard'
import InstagramPopup from '../InstagramPopup/InstagramPopup'
import './InstagramGrid.css'


const Instagram = () => {
  return (
    <div className='instagram-container'>
      <h3 className='instagram-header'>Our instagram</h3>
      <div className='instagram-grid'>
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
        <InstagramCard />
      </div>
      <div className='instagram-cta'>
        <InstagramPopup />
      </div>
    
    
    </div>
  )
}

export default Instagram