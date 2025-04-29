import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS Module
import { FaBars, FaTimes } from 'react-icons/fa'; // Example icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked (important for SPA navigation)
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <a href="#hero" className={styles.navLogo} onClick={closeMenu}>
          AKil Maharjan
        </a>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#hero" className={styles.navLink} onClick={closeMenu}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          </li>
           <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink} onClick={closeMenu}>Skills</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={styles.navLink} onClick={closeMenu}>Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
