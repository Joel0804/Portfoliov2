import { useState, useEffect } from 'react'
import axios from 'axios' 

function Projects(){
    const [projects, setprojects] = useState([]) 
    useEffect(()=> {
        axios.get("http://127.0.0.1:8000/api/projects/")
        .then(res => setprojects(res.data))
    },[])
    return (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-tags">
            {project.tech_used.split(',').map((tech, i) => (
              <span key={i} className="tech-tag">{tech.trim()}</span>
            ))}
          </div>
          <a href={project.github_url} target="_blank" rel="noopener noreferrer">GitHub</a>
          {project.live_url && (
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
        </div>
      ))}
    </div>
  </section>
)
}

export default Projects