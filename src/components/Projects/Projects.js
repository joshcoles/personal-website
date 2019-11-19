import React from 'react';

const Projects = (props) => {

  return (
    <section className="project-section container">
      {
        props.data.map((project) => (
          <a key={project.node.id} href={project.node.url}>
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
    </section>
  )
}

export default Projects;