import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return ( 
    <div className={`${styles.navbar}`}>
      <div className={`${styles.dflex}`}>
          <div className={`${styles.navlinks_left}`}>
        <h2 className={`${styles.logo}`}>Fixxo.</h2>
            <li className={`${styles.links}`}>Home</li>
            <li className={`${styles.links}`}>Categories</li>
            <li className={`${styles.links}`}>Products</li>
        </div>
        <div className={`${styles.navlinks_right}`}>
          <li className={`${styles.links}`}>Login</li>
          <li className={`${styles.links}`}>My Cart</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar