import React from 'react';
import styles from './projects.module.scss';

const Projects = (props) => {

  return (
    <section className={styles.projects}>
      <h2>{props.description.projectDescription}</h2>
      <div className={styles.projectsContainer}>
        {
          props.projects.map((project) => (
            <a className={styles.project} key={project.node.id} href={project.node.url}>
              <h3>{project.node.title}</h3>
              <p>{project.node.childContentfulProjectDescriptionTextNode.description}</p>
              
              <span>Tech stack:</span>
              <ul>
                {
                  project.node.techStack.map((tech, index) => (
                    <li key={index}>{tech.content}</li>
                  ))
                }
              </ul>  
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Projects;