import React from 'react';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for links

function ProjectCard({ title, description, imageUrl, techStack = [], liveUrl, codeUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${title} screenshot`} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {techStack.length > 0 && (
          <div className={styles.techStack}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techItem}>{tech}</span>
            ))}
          </div>
        )}
        <div className={styles.links}>
          
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source code of ${title}`}>
              <FaGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
