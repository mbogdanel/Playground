import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../App.css'

const Navigation = () => {
  return (
    <>
      <Navbar
        className='navigation'
        collapseOnSelect
        expand='sm'
        variant='dark'
      >
        <Navbar.Brand>
          <Link
            className='navLink'
            to='/'
            style={{
              paddingLeft: 15,
              textDecoration: 'none',
            }}
          >
            Marius Bogdanel
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} className='navLink' to='/about'>
              aboutMe
            </Nav.Link>
            <Nav.Link as={Link} className='navLink' to='projects'>
              projects
            </Nav.Link>
            <Nav.Link as={Link} className='navLink' to='github'>
              gitHub
            </Nav.Link>
            <Nav.Link as={Link} className='navLink' to='contact'>
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
