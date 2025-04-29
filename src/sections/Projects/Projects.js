import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import observer
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import the card
import projImg1 from '../../assets/images/project1.PNG'
import projImg2 from '../../assets/images/project2.PNG'
import projImg3 from '../../assets/images/project3.PNG'
// --- Define Project Data ---
const projectsData = [
  {
    title: 'Image Search Engine',
    description: 'A web application that allows users to search for images using keywords. It fetches data from the Unsplash API and displays results in a responsive grid.',
    imageUrl: projImg3, // Placeholder SS
    techStack: ['React', 'API', 'CSS Modules', 'API'],
    liveUrl: '/', // Add live link if available
    codeUrl: 'https://github.com/Akil-Maharjan/Html-css-and-js-project/tree/main/Image%20Search', // Add repo link if available
  },
  {
    title: 'To-Do List',
    description: 'Provides current weather information for a user-specified location. Utilizes the OpenWeatherMap API to retrieve and display temperature, conditions, and humidity.',
    imageUrl: projImg1, // Placeholder SS
    techStack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '/',
    codeUrl: 'https://github.com/Akil-Maharjan/Html-css-and-js-project/tree/main/To-do%20LISt',
  },
  {
    title: 'Rock-Paper-Scissors Game',
    description: 'A classic browser game built with JavaScript. Features user interaction, score tracking, and a simple, intuitive interface for playing against the computer.',
    imageUrl: projImg2, // Placeholder SS
    techStack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '/',
    codeUrl: 'https://github.com/Akil-Maharjan/Html-css-and-js-project/tree/main/Rock-Paper-Scissor',
  },
  // Add more projects here
];
// --- End Project Data ---

function Projects() {
  // --- Observer for the section ---
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of section is visible
  });

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className="container">
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            // --- Render ProjectCard ---
            <div
              key={index}
              // Apply animation class based on section visibility
              // Add hidden class for initial state
              className={`${styles.projectItemWrapper} ${
                 sectionInView ? styles.animateFadeInUp : styles.hidden
              }`}
              // Stagger animation delay
              style={{ animationDelay: `${index * 0.15}s` }}
            >
               <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
                liveUrl={project.liveUrl}
                codeUrl={project.codeUrl}
              />
            </div>
            // --- End Render ProjectCard ---
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
