import React from 'react';
// Import the typing animation component
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import profilePic from '../../assets/images/profile.jpg'; // Adjust path if needed

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={`${styles.heroText} ${styles.fadeInUp} ${styles.delay1}`}>
            <h1 className={styles.heroTitle}>Hi, I'm Akil Maharjan</h1>
            {/* --- Replace static subtitle with TypeAnimation --- */}
            <TypeAnimation
              sequence={[
                // Same String at the start will only be typed once, initially
                'A Full-Stack Developer',
                1500, // wait 1.5s
                'A React Enthusiast',
                1500, // wait 1.5s
                'A Problem Solver',
                1500, // wait 1.5s
                'Building Web Solutions',
                1500,
              ]}
              wrapper="h2" // Use h2 tag like the original subtitle
              speed={50}   // Typing speed
              className={styles.heroSubtitle} // Apply existing styles
              repeat={Infinity} // Repeat the sequence indefinitely
            />
            {/* --- End TypeAnimation --- */}
            <p className={`${styles.heroDescription} ${styles.fadeInUp} ${styles.delay2}`}>
              I create modern and responsive web applications, turning ideas into reality with clean code and user-friendly design.
            </p>
            <a
              href="#projects"
              className={`${styles.heroButton} button-primary ${styles.fadeInUp} ${styles.delay3}`}
            >
              View My Work
            </a>
          </div>

          {/* Image */}
          <div className={`${styles.heroImageContainer} ${styles.fadeInUp} ${styles.delay4}`}>
            <img
              src={profilePic}
              alt="Akil Maharjan"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
