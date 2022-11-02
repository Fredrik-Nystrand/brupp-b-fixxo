import React from 'react'
import './InstagramCard.css'
import fakeimage from "../../assets/01.png"

const InstagramCard = () => {
  return (
    <div className='instagram-card'>
     <div className="instagram-card-img-container">
        <img className='instagram-card-img' src={fakeimage} alt="bild" />
      </div>
    </div>
  )
}

export default InstagramCard