import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProjectCard = ({ key, name, description }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant='primary'>{name}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCard
