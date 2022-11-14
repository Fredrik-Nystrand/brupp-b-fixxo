import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { BiSearch } from 'react-icons/bi';
import { BiShoppingBag } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsPerson } from 'react-icons/bs'
import useBreakpoint from '../../shared/hooks/useBreakpoint';

const Navbar = () => {
const bp = useBreakpoint();
const navRef = useRef();
const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.dflex}`}>
          
        <div className={`${styles.navlinks_left}`}>
            
         {bp.lessThan("md") && <button className={`${styles.nav_btn}`} onClick={() => setToggleNavbar(state => !state)}><GiHamburgerMenu className={`${styles.hamburger_menu}`}/></button>}
          <h2 className={`${styles.logo}`}>Fixxo.</h2>

          <div ref={navRef} className={`${styles.dflex} ${bp.lessThan("md") && styles.navlinks_mobile } ${toggleNavbar ? styles.responsive_nav : ''}`}>
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
        </div>


        <div className={`${styles.navlinks_right}`}>
          <li className={`${styles.links}`}>
            <button className={`${styles.btn_bag}`}><BiShoppingBag className={`${styles.bi_bag}`}/></button>
            <button className={`${styles.btn_login}`}><BsPerson className={`${styles.bs_login}`}/></button>
            {bp.moreThan("md") && <button className={`${styles.btn_search}`}><BiSearch className={`${styles.bi_search}`}/></button>}
            {bp.moreThan("md") && <input type="text" className={`${styles.input_search}`} placeholder="Type to Search..."></input>}
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
