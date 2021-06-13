import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HeroPage = () => {
  return (
    <div className='mt-5 ml-5'>
      <h1>Marius's Playground</h1>
      <Container>
        <Row>
          <Col xs={18} md={8} className='mt-5'>
            <h2>Something here</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              facilis quia mollitia quibusdam quisquam dicta ad dignissimos
              nobis? Est sapiente suscipit cupiditate vitae aspernatur
              temporibus magnam eos earum velit amet?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              facilis quia mollitia quibusdam quisquam dicta ad dignissimos
              nobis? Est sapiente suscipit cupiditate vitae aspernatur
              temporibus magnam eos earum velit amet?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              facilis quia mollitia quibusdam quisquam dicta ad dignissimos
              nobis? Est sapiente suscipit cupiditate vitae aspernatur
              temporibus magnam eos earum velit amet?
            </p>
          </Col>
          <Col xs={0} md={4} className='mt-5'>
            <img src='/media/profile_small.jpg' alt='Profile' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroPage
