import React, { useState, useEffect } from 'react'
import SearchBox from '../components/SearchBox'
import { Card } from 'react-bootstrap'

const GitHub = () => {
  const [userData, setUserData] = useState({})
  const [searchField, setSearchField] = useState('mbogdanel')

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchField}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
  }, [searchField])

  // console.log(userData)

  return (
    <div align='center' className='fluid mt-5 content-wrap'>
      <SearchBox onSearchChange={onSearchChange} searchField={searchField} />
      <Card
        className='d-flex'
        style={{ width: '18rem', backgroundColor: 'rgb(220,220,220)' }}
      >
        <Card.Img variant='top' src={userData.avatar_url} />
        <Card.Body className='mx-auto'>
          <Card.Title>{userData.name}</Card.Title>
        </Card.Body>
        <div className='list-group-flush mx-auto'>
          <h6>
            Location: <strong>{userData.location}</strong>
          </h6>
          <h6>Public Repos: {userData.public_repos}</h6>
          <h6>Followers: {userData.followers}</h6>
          <h6>Following: {userData.following}</h6>
        </div>
        <Card.Body className='list-group-flush mx-auto'>
          <Card.Link href={userData.blog}>Blog Link</Card.Link>
          <Card.Link href={userData.html_url}>GitHub Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GitHub
