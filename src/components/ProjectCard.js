import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProjectCard = ({ name, description }) => {
  return (
    <div className='card' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCard
