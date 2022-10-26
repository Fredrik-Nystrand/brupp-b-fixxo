import React from 'react'
import styles from './Footer.module.css'
import appstore from './img'



const Footer = () => {
  return ( 
    <div className={`${styles.footer} + container-outer`}>
     
      <div className={`${styles.dflex} + `}>

        <section className={`${styles.section}`}>
          <h5>Customer Service</h5>
          <ul className={`${styles.link}`}>
            <li className=''><a href="#">Help & FAQs</a></li>
            <li className=''><a href="#">Order Lookup</a></li>
            <li className=''><a href="#">Shipping & Delivery</a></li>
            <li className=''><a href="#">Returns</a></li>
            <li className=''><a href="#">Contact Us</a></li>
          </ul>
        </section>

        <section className={`${styles.section}`}>
          <h5>Macys' Credit Card</h5>
          <ul className={`${styles.link}`}>
            <li className=''><a href="#">Macys's Card Services</a></li>
            <li className=''><a href="#">Pay Your Credit Card Bill</a></li>
            <li className=''><a href="#">Cardholder Benefits</a></li>
            <li className=''><a href="#">Apply for Macy's Credit Card</a></li>            
          </ul>
        </section>

        <section className={`${styles.section}`}>
          <h5>Our Stores</h5>
          <ul className={`${styles.link}`}>
            <li className=''><a href="#">Stores & Services</a></li>
            <li className=''><a href="#">Locations & Hours</a></li>
            <li className=''><a href="#">Store Events</a></li>
            <li className=''><a href="#">Catalogs</a></li>            
          </ul>
        </section>

        <section className={`${styles.section}`}>
          <h5>Macys's App</h5>

          <div className=''>     
            <a href="#"><img src={appstore} alt="" /></a>

          </div>
        </section>

        


      </div>

    <div className={`${styles.footerBottom}`}>
      <hr className={`${styles.hr}`}/>
        <p>© 2021 Fixxo. All Rights Reserved</p>
    </div>
      
    </div>
  )
}

export default Footer