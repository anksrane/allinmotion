/* Path: src\components\layout\Header\Header.jsx */

import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../../assets/index'
import { GoArrowUpRight } from "react-icons/go";
import { NavButtonIcon } from '../../index';
import { IoCloseSharp } from "react-icons/io5";
import styles from './Header.module.css'

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu opens
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);  

  const toggleMenu = ()=>{
    setMenuOpen(prev => !prev)
  }
  return (
    <div className={`w-full ${styles.headerOuterContainer}`}>
      <div className={`container ${styles.headerInnerContainer}`}>
        <button 
        type='button' 
        className={styles.menuButton}
        onClick={() => toggleMenu()}
        ><span>{'['}</span> {menuOpen? "close" : "menu"} <span>{']'}</span></button>
        <NavLink to="/"><img src={Logo} alt="Logo" className={`img-fluid ${styles.logoImg}`} /></NavLink>
        <NavButtonIcon className={styles.hideMob} to="/contact" icon={GoArrowUpRight}> Start a Project</NavButtonIcon>
      </div>
      <div className={`${styles.navItemsOuterContainer} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.navItemsInnerContainer}>
          {navLinks.map((link)=>(
            <NavLink to={link.to} key={link.to}
            onClick={()=> toggleMenu()}
            className={({isActive})=>`${styles.navItem} ${isActive ? styles.active : ""}`}>
              <span className={styles.corner}></span>
              <span className={styles.corner}></span>
              <span className={styles.corner}></span>
              <span className={styles.corner}></span>
              {link.label}</NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header