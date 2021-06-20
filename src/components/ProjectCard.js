import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProjectCard = ({
  name,
  description,
  liveLink,
  gitHubLink,
  pictureSrc,
  videoLink,
}) => {
  return (
    <div className='card' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Card
        className='card'
        style={{ width: '20rem', backgroundColor: 'rgba(0,0,0,0.4)' }}
      >
        <Card.Img variant='' src={pictureSrc} alt='projectPic' />
        <Card.Body>
          <Card.Title className='cardText'>{name}</Card.Title>
          <Card.Text className='cardText'>{description}</Card.Text>
          {liveLink && (
            <Button className='cardButton' href={liveLink} variant='secondary'>
              Live
            </Button>
          )}
          {videoLink && (
            <Button className='cardButton' href={videoLink} variant='secondary'>
              Video
            </Button>
          )}
          <Button className='cardButton' href={gitHubLink} variant='secondary'>
            Source
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCard
