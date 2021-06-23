import React from 'react'
import emailjs from 'emailjs-com'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithubAlt, FaPhoneAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_v3qp6ig',
        e.target,
        'user_uuWgGZgb6pbunaSBrYGUP'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  let iconStyles = { fontSize: '1.5em' }
  let linkStyles = { color: 'white' }

  return (
    <Container className='mt-3 content-wrap' align='center'>
      <Row>
        <h1 className='my-5 mx-auto'>Contact Page</h1>
      </Row>
      <Row>
        <Col sm='18' md='5' className='mx-auto mb-5'>
          <div>
            <h3 className='mb-5 mt-2'>
              Get in touch with me directly or use the form I built and EmailJS
              will take care of the rest
            </h3>
            <div className='m-1'>
              <FaPhoneAlt color='green' style={iconStyles} />
              &nbsp;&nbsp;
              <a style={linkStyles} href='tel: 07718957245'>
                07718957245
              </a>
            </div>
            <div className='m-1'>
              <FaEnvelope color='red' style={iconStyles} />
              &nbsp;&nbsp;
              <a style={linkStyles} href='mailto: marius.bogdanel@gmail.com'>
                marius.bogdanel@gmail.com
              </a>
            </div>
            <div className='m-1'>
              <FaGithubAlt color='white' style={iconStyles} />
              &nbsp;&nbsp;
              <a style={linkStyles} href='https://github.com/mbogdanel'>
                {' '}
                GitHub
              </a>
            </div>
            <div className='m-1'>
              <FaLinkedin color='blue' style={iconStyles} />
              &nbsp;&nbsp;
              <a
                style={linkStyles}
                href='https://www.linkedin.com/in/marius-bogdanel-1252651b4/'
              >
                {' '}
                LinkedIn
              </a>
            </div>
          </div>
        </Col>
        <Col style={{ width: '24rem' }} sm='18' md='5' className='mx-auto'>
          <div className='container mb-3'>
            <form onSubmit={sendEmail}>
              <div className='row py-3 mx-auto'>
                <Col sm='18' md='10' className=' form-group mx-auto'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    name='name'
                  />
                </Col>
                <Col sm='18' md='10' className='form-group pt-2 mx-auto'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email Address'
                    name='email'
                  />
                </Col>
                <Col sm='18' md='10' className='form-group pt-2 mx-auto'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    name='subject'
                  />
                </Col>
                <Col sm='18' md='10' className='form-group pt-2 mx-auto'>
                  <textarea
                    className='form-control'
                    id=''
                    cols='30'
                    rows='8'
                    placeholder='Your message'
                    name='message'
                  ></textarea>
                </Col>
                <Col sm='18' md='10' className='form-group pt-3 mx-auto'>
                  <input
                    type='submit'
                    className='btn btn-info mx-auto'
                    value='Send Message'
                  ></input>
                </Col>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
