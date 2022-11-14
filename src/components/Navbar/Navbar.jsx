import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { BiSearch } from 'react-icons/bi';
import { BiShoppingBag } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.dflex}`}>
        <div className={`${styles.navlinks_left}`}>
        <div className={`${styles.nav_toggle}`}>
          <button className={`${styles.nav_toggle_btn}`}><GiHamburgerMenu className={`${styles.hamburger_menu}`}/></button>
        </div>
          <h2 className={`${styles.logo}`}>Fixxo.</h2>
          <li className={`${styles.links}`}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={`${styles.links}`}>
            <a href="#categories">Categories</a>
          </li>
          <li className={`${styles.links}`}>
            <NavLink to="/shop">Products</NavLink>
          </li>
        </div>
        <div className={`${styles.navlinks_right}`}>
          <li className={`${styles.links}`}>
            <button className={`${styles.btn_bag}`}><BiShoppingBag className={`${styles.bi_bag}`}/></button>
            <button className={`${styles.btn_login}`}><BsPerson className={`${styles.bs_login}`}/></button>
            <button className={`${styles.btn_search}`}><BiSearch className={`${styles.bi_search}`}/></button>
            <input type="text" className={`${styles.input_search}`} placeholder="Type to Search..."></input>
          </li>
        </div>

      </div>
    </div>
  )
}

export default Navbar
