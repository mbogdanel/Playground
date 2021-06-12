import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../App.css'

const Navigation = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        className='navigation'
        collapseOnSelect
        expand='sm'
        // bg='dark'
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
            <Nav.Link>
              <Link className='navLink' to='/about'>
                aboutMe
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='projects'>
                projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='github'>
                gitHub
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='navLink' to='contact'>
                contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
