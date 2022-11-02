import React from 'react'
import styles from './Navbar.module.css'
import { BiSearch } from 'react-icons/bi';
import { BiShoppingBag } from 'react-icons/bi'

const Navbar = () => {
  return ( 
    <div className={`${styles.navbar}`}>
      <div className={`${styles.dflex}`}>
          <div className={`${styles.navlinks_left}`}>
            <h2 className={`${styles.logo}`}>Fixxo.</h2>
              <li className={`${styles.links}`}><a href='#'>Home</a></li>
              <li className={`${styles.links}`}>Categories</li>
              <li className={`${styles.links}`}>Products</li>
              
        </div>
        <div className={`${styles.navlinks_right}`}>
          <li className={`${styles.links}`}>Login</li>
          <li className={`${styles.links}`}>
            <button className={`${styles.btn_bag}`}><BiShoppingBag className={`${styles.bi_bag}`}/></button>
            <button className={`${styles.btn_search}`}><BiSearch className={`${styles.bi_search}`}/></button>
            <input type="text" className={`${styles.input_search}`} placeholder="Type to Search..."></input>
          </li>


        </div>
      </div>
    </div>
  )
}

export default Navbar