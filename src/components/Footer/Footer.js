import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Add relevant icons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.socialIcons}>
          {/* Replace '#' with your actual profile links */}
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <FaTwitter />
          </a>
          {/* Add more social links as needed */}
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
