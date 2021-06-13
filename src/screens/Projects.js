import React from 'react'
import ProjectsList from '../components/ProjectsList'
import projects from '../content/projects.js'

const Projects = () => {
  console.log(projects[0])

  return (
    <div>
      <h1>Projects Page</h1>

      <ProjectsList />
    </div>
  )
}

export default Projects
