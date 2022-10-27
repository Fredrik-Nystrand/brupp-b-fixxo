import React from 'react'
import styles from './Hero.module.css'
import hero from '../../assets/Hero/Hero.svg'

const Hero = () => {
  return (
  <header className={`${styles.hero_bg}`}>
      <div className={`${styles.hero}`}>  

            <div className={`${styles.text_group}`}>
              <h3>Get up to 40% off</h3>
              <h1>Don't Miss This Opportunity</h1>
              <p>Online shopping free home delivery over $100</p>
              <button className={`${styles.btn} ${styles.btn_hero}`}>Shop now</button>
            </div>

            <div className={`${styles.img}`}>
              <img src={hero} alt="girl holding a hat" />
            </div>

        </div>
    </header>
  )
}

export default Hero