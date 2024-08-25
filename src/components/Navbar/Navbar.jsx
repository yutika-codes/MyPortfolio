import React from 'react'
import styles from "./Navbar.module.css";
import { useState } from 'react';
import {getImageUrl} from "../../utils";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title}href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} src={
                menuOpen ? getImageUrl("nav/closeIcon.png")
                :getImageUrl("nav/menuIcon.png")
            } alt='menu-button'
            onClick={()=>setMenuOpen(!menuOpen)}>

            </img>
            {/* clicking on the menu bar displays a closing icon and when we click on the list it navigates to the particular componenturl and closes the hamburger menu */}
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setMenuOpen(false)}>
        {/* <li>
     <a href='#about'>About</a>
     </li> */}
     <li>
     <a href='#experience'>experience</a>
     </li>
     <li>
     <a href='#project'>project</a>
     </li>
     <li>
     <a href='#contact'>contact</a>
     </li>
     
     </ul>
     </div>
     </nav>
  )
}

export default Navbar
