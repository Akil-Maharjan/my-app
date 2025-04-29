import React from 'react';
// Import the hook
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';
import profilePic from '../../assets/images/profile.jpg';

function About() {
  // --- Use the hook ---
  // ref: Attach this to the element you want to observe (the section itself)
  // inView: Boolean, true if the element is in the viewport
  // triggerOnce: Only trigger the animation the first time it becomes visible
  // threshold: Percentage of the element that needs to be visible (0.1 = 10%)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust as needed, maybe 0.2 for triggering a bit later
  });
  // --- End hook usage ---

  return (
    // Attach the ref here to observe the entire section
    <section id="about" className={styles.about} ref={ref}>
      <div className={`${styles.aboutContent} container`}>
        {/* Optional Image - Add conditional animation class */}
        <div
          className={`${styles.aboutImageContainer} ${
            inView ? styles.animateSlideInLeft : styles.hidden // Apply animation class when inView is true
          }`}
        >
          <img src={profilePic} alt="Akil Maharjan" className={styles.aboutImage} />
        </div>

        {/* Text Content - Add conditional animation class */}
        <div
          className={`${styles.aboutText} ${
            inView ? styles.animateFadeInUp : styles.hidden // Apply animation class when inView is true
          }`}
        >
          {/* Section Title */}
          <h2>About Me</h2>

          <p>
            Hello! I'm Akil Maharjan, a Front-end Developer. I specialize in building modern, responsive, and user-friendly web applications from the ground up.
          </p>
          
          <p>
            I've put my skills into practice through several projects, demonstrating my ability to work with APIs and create interactive experiences. Some examples include:
            <ul>
              <li>An <strong>Image Search Engine</strong> that fetches and displays images based on user queries using a third-party API.</li>
              <li>A <strong>Weather Fetching App</strong> that retrieves and presents current weather data for specified locations via an API.</li>
              <li>A classic <strong>Rock-Paper-Scissors Game</strong> built with JavaScript to showcase front-end logic and user interaction.</li>
            </ul>
          </p>
          <p>
            I'm constantly seeking opportunities to grow, collaborate, and contribute to exciting projects. Feel free to explore my work or connect with me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
