import React from 'react'
import styles from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa';

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
          <div className={`${styles.links}`}>
            <button className={`${styles.btn_search}`}><FaSearch className={`${styles.fa_search}`}/></button>
            <input type="text" className={`${styles.input_search}`} placeholder="Type to Search..."></input>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar