import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../content/projects.js'

const Projects = () => {
  console.log(projects)
  const cardsArray = Object.keys(projects).map((project, index) => {
    console.log(project.name)
    return (
      <ProjectCard
        key={index}
        name={project.name}
        description={project.description}
      />
    )
  })
  return (
    <div>
      <h1>Projects Page</h1>

      {cardsArray}
    </div>
  )
}

export default Projects
