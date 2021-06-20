import React from 'react'
import { Container } from 'react-bootstrap'

const AboutMe = () => {
  return (
    <div className='mt-5 ml-5 content-wrap'>
      <h1>About me Page</h1>
      <Container className='mt-5 ml-5 '>
        <h4 className=''>
          ...from joining links of a motorcycle's chain to chain the nodes of a
          linked list...
        </h4>
        <p>
          I am a self-taught Web developer with good knowledge of Javascript and
          related tools. Examples of my work can be found on my Github
          repositories.
        </p>
        <p>
          My belief is that the technical background and the skills aquired on
          my current job, as an engineering technician, are a solid foundation
          for a career in Web development.
        </p>
        <p>
          I am a friendly, hardworking, responsible person, with a great desire
          to improve and wish to find a team of developers to share these values
          with.
        </p>
        <p>
          On my spare time I enjoy the outdoor activities, gardening and playing
          the blues.
        </p>
        <span class='d-flex mt-3'>
          <a
            className='cta-btn cta-btn--resume'
            href='https://resume.io/r/OAvwuZqx6'
          >
            View Resume
          </a>
        </span>
      </Container>
    </div>
  )
}

export default AboutMe
