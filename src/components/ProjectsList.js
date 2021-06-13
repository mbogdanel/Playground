import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../content/projects.js'
import { Container, Row } from 'react-bootstrap'

const ProjectsList = () => {
  const cardsArray = projects.map((project, i) => {
    console.log(project.name)
    return (
      <ProjectCard
        key={i}
        name={projects[i].name}
        description={projects[i].description}
      />
    )
  })

  return (
    <div>
      <Container>
        <Row>{cardsArray}</Row>
      </Container>
    </div>
  )
}

export default ProjectsList
