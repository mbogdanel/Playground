import React, { useState, useEffect } from 'react'
import SearchBox from '../components/SearchBox'
// import { Link } from 'react-router-dom'

const GitHub = () => {
  const [userData, setUserData] = useState({})
  const [searchField, setSearchField] = useState('')

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
    <div className='mt-5 ml-5 content-wrap'>
      <SearchBox onSearchChange={onSearchChange} />
      <h1>{userData.name}</h1>
      <h1>
        <a href={userData.blog}>Portfolio Website</a>
      </h1>
      <h1>
        <a href={userData.html_url}>GitHub Website</a>
      </h1>

      <h1>{userData.location}</h1>
      <h1>{userData.public_repos}</h1>
    </div>
  )
}

export default GitHub
