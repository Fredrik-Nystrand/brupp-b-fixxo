import React from 'react'
import styles from './Support.module.css'
import support from '../../assets/support/customer.svg'
import payment from '../../assets/support/payment.svg'
import truck from '../../assets/support/truck.svg'

const Support = () => {
  return (
      <div className={`${styles.cards} ${styles.grid}`}>

        <div className={`${styles.card} ${styles.center}`}>
          <div className={`${styles.bg_img} ${styles.d_flex}`}>
           <img src={support} alt="customer-service"/>
          </div>
            <h3>Customer Support</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
        </div>

        <div className={`${styles.card} ${styles.center}`}>
          <div className={`${styles.bg_img} ${styles.d_flex}`}>
            <img src={payment} alt="credit-card" />
          </div>
            <h2>Secured Payment</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p> 
        </div>

        <div className={`${styles.card} ${styles.center}`}>
          <div className={`${styles.bg_img} ${styles.d_flex}`}>
            <img src={truck} alt="truck" />
          </div>
            <h3>Free Home Delivery</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
        </div>

        <div className={`${styles.card} ${styles.center}`}>
          <div className={`${styles.bg_img} ${styles.d_flex}`}>
            <img src={truck} alt="truck" />
          </div>
          <h3>30 Day Reuters</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus.</p>
        </div>

      </div>
    
  )
}

export default Support