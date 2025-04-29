import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons

function Contact() {
  // IMPORTANT: This form won't actually send emails without a backend
  // or a service like Formspree, Netlify Forms, or EmailJS.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submission is not implemented in this demo.");
    // Add logic here to send form data using a backend service
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities, and my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <ul className={styles.socialLinks}>
              <li>
                <a href="mailto:your.email@example.com" aria-label="Email me">
                  <FaEnvelope /> your.email@example.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="My LinkedIn profile">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="My GitHub profile">
                  <FaGithub /> GitHub
                </a>
              </li>
              {/* Add other relevant links */}
            </ul>
          </div>

          {/* Basic Contact Form (Requires Backend/Service) */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
             <h3>Send me a message</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button-primary">Send Message</button>
             <p className={styles.formNote}>Note: Form submission requires backend setup.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
