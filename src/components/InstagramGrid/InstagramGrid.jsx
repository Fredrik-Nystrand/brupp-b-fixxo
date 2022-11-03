import React from 'react'
import InstagramCard from '../InstagramCard/InstagramCard'
import InstagramPopup from '../InstagramPopup/InstagramPopup'
import styles from './InstagramGrid.module.css'


const Instagram = () => {
  return (
    <div className={`${styles.instagram_wrapper}`}>
      <h3 className={`${styles.instagram_header}`}>Our instagram</h3>
      <div className={`${styles.instagram_grid}`}>
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

        <div className={`${styles.instagram_popup_wrapper}`}>
          <InstagramPopup />
        </div>
        
      </div>
    
    
    </div>
  )
}

export default Instagram