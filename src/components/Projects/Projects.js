import React from 'react';

const Projects = () => {
  <section className="project-section container">
    <h2 className="project-heading">Some stuff I've built or worked on</h2>
    <div className="row projects-list">
    {this.state.projects.map((project, index) => {
      return (
        <div className="project-outer col-lg-4 col-sm-12" key={index}>
          <a href={project.url}>
            <div className="project-inner">
              <h2>{project.name}</h2>
              {project.description.map((paragraph, index) => {
                return (
                  <p key={index}>{paragraph}</p>
                )
              })}
              <h3>Tech Stack: </h3>
              <ul className="tech-stack">
                {project.stack.map((tech, index) => {
                  return (
                    <li key={index}>{tech}</li>
                  )
                })}
              </ul>
            </div>
          </a>
        </div>
      )
    })}
    </div>
  </section>
}

export default Projects;