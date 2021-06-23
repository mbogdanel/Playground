import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profile4 from '../media/profile4.jpg'

const HeroPage = () => {
  return (
    <div className='mt-5 ml-5 content-wrap'>
      <h1>Marius's Playground</h1>
      <Container>
        <Row>
          <Col xs={18} md={6} className='mt-5'>
            <h2>Welcome</h2>
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
          <Col xs={0} md={6} className='mt-5'>
            <div align='center'>
              <img className='heroPicture' src={profile4} alt='Profile' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroPage
