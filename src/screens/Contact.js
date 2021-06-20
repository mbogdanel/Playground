import React from 'react'
import emailjs from 'emailjs-com'
import { Col } from 'react-bootstrap'

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

  return (
    <div className='mt-3 mx-3 content-wrap'>
      <h1 className='my-5'>Contact Page</h1>
      <div className='container mb-3'>
        <form onSubmit={sendEmail}>
          <div className='row py-3 mx-auto'>
            <Col sm='18' md='7' className=' form-group mx-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
              />
            </Col>
            <Col sm='18' md='7' className='form-group pt-2 mx-auto'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='email'
              />
            </Col>
            <Col sm='18' md='7' className='form-group pt-2 mx-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
              />
            </Col>
            <Col sm='18' md='7' className='form-group pt-2 mx-auto'>
              <textarea
                className='form-control'
                id=''
                cols='30'
                rows='8'
                placeholder='Your message'
                name='message'
              ></textarea>
            </Col>
            <Col sm='18' md='7' className='form-group pt-3 mx-auto'>
              <input
                type='submit'
                className='btn btn-info mx-auto'
                value='Send Message'
              ></input>
            </Col>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
