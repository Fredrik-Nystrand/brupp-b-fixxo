import React from 'react'
import styles from './InstagramPopup.module.css'
import { FaInstagram } from "react-icons/fa"
import ButtonMain from '../ButtonMain/ButtonMain'

const InstargramPopup = () => {
  return (
    <div className={`${styles.instagram_popup}`}>
      
        <div>
          <FaInstagram className={`${styles.instagram_popup_icon}`}/>
        </div>
        <div>
          <p className={`${styles.instagram_popup_text}`}>Instagram</p>
        </div>
        <div>
          <ButtonMain 
            text="FOLLOW"
            variant="dark"
            weight="bold"
            border="true"
          />
        </div>
      
    </div>
  )
}

export default InstargramPopup