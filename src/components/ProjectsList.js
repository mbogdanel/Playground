import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../content/projects.js'
import { Container, Row } from 'react-bootstrap'
import adventofcode from '../media/adventofcode.jpg'
import bibicraft from '../media/bibicraft.jpg'
import cambridge from '../media/cambridge.png'
import facedetectionapp from '../media/facedetectionapp.jpg'
import robofriends from '../media/robofriends.jpg'
import workorganiser from '../media/workorganiser.jpg'

const ProjectsList = () => {
  const pictureArray = [
    adventofcode,
    bibicraft,
    facedetectionapp,
    robofriends,
    cambridge,
    workorganiser,
  ]
  const cardsArray = projects.map((project, i) => {
    console.log(project)
    return (
      <div className='car-deck-wrapper'>
        <div className='car-deck'>
          <ProjectCard
            key={i}
            name={projects[i].name}
            description={projects[i].description}
            liveLink={projects[i].liveLink}
            gitHubLink={projects[i].gitHubLink}
            videoLink={projects[i].videoLink}
            pictureSrc={pictureArray[i]}
          />
        </div>
      </div>
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
