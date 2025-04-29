import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

// Import desired icons from react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
// Add more icons as needed

// --- Define your skills data WITH URLs ---
const skillsData = [
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    // Link to MDN Docs
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    // Link to MDN Docs
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    // Link to MDN Docs
    docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'React',
    icon: <FaReact />,
    // Link to official React docs
    docsUrl: 'https://react.dev/'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    // Link to official Node.js docs
    docsUrl: 'https://nodejs.org/en/docs'
  },
  {
    name: 'MongoDB',
    icon: <DiMongodb />,
    // Link to official MongoDB docs
    docsUrl: 'https://www.mongodb.com/docs/'
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    // Link to official Git docs
    docsUrl: 'https://git-scm.com/doc'
  },
  // Add more skills here with their respective docsUrl
  // Example using Google Search as fallback:
  // {
  //   name: 'Express',
  //   icon: <SiExpress />, // Assuming you import SiExpress
  //   docsUrl: 'https://www.google.com/search?q=Express.js+documentation'
  // }
];
// --- End skills data definition ---

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <h2>My Skills</h2>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`${styles.skillItem} ${
                inView ? styles.animateFadeInUp : styles.hidden
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* --- Wrap the icon div with an anchor tag --- */}
              <a
                href={skill.docsUrl}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className={styles.skillLink} // Add a class for styling the link if needed
                aria-label={`Learn more about ${skill.name}`} // Accessibility improvement
              >
                <div className={styles.skillIcon}>{skill.icon}</div>
              </a>
              {/* --- End anchor tag wrapper --- */}
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
