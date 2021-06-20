import React, { useState, useEffect } from 'react'
import SearchBox from '../components/SearchBox'
import { Image, Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

const GitHub = () => {
  const [userData, setUserData] = useState({})
  const [searchField, setSearchField] = useState('mbogdanel')

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
    console.log(searchField)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchField}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
  }, [searchField])

  // console.log(userData)

  return (
    <div className='my-5 mx-5 content-wrap'>
      <SearchBox
        onSearchChange={onSearchChange}
        searchField={searchField}
        className='mx-auto'
      />
      <Card
        className='d-flex justify-content-center'
        style={{ width: '18rem' }}
      >
        <Card.Img variant='top' src={userData.avatar_url} />
        <Card.Body className='mx-auto'>
          <Card.Title>{userData.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>

        <ListGroup className='list-group-flush mx-auto'>
          <ListGroupItem>Location: {userData.location}</ListGroupItem>
          <ListGroupItem>Public Repos: {userData.public_repos}</ListGroupItem>
          <ListGroupItem>Followers: {userData.followers}</ListGroupItem>
          <ListGroupItem>Following: {userData.following}</ListGroupItem>
        </ListGroup>
        <Card.Body className='list-group-flush mx-auto'>
          <Card.Link href={userData.blog}>Blog Link</Card.Link>
          <Card.Link href={userData.html_url}>GitHub Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GitHub
